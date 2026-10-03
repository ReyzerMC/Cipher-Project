import {
  dummyVerify,
  MAX_LOGIN_PASSWORD_LENGTH,
  verifyPassword,
} from "../../utils/password";
import {
  createSession,
  deleteExpiredSessions,
  sessionCookie,
} from "../../utils/auth";
import { avatarUrlFor, json, serverError } from "../../utils/http";
import {
  cleanupAttempts,
  clearFailures,
  isRateLimited,
  loginRateLimitKey,
  recordFailure,
  RETRY_AFTER_SECONDS,
} from "../../utils/rate-limit";

interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    let body: {
      identifier?: string;
      password?: string;
    };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body." }, 400);
    }

    const identifier = body.identifier?.trim() ?? "";
    const password = body.password ?? "";

    if (!identifier || !password) {
      return json(
        { error: "Username/email and password are required." },
        400
      );
    }

    // Entradas absurdas: mismo error genérico y sin gastar CPU en el hash
    if (identifier.length > 254 || password.length > MAX_LOGIN_PASSWORD_LENGTH) {
      return json({ error: "Invalid credentials." }, 401);
    }

    const limitKey = loginRateLimitKey(request, identifier);

    if (await isRateLimited(env.DB, limitKey)) {
      return json(
        { error: "Too many failed attempts. Please try again later." },
        429,
        { "Retry-After": String(RETRY_AFTER_SECONDS) }
      );
    }

    // El nombre de usuario no distingue mayúsculas; el email siempre va en minúsculas
    const user = await env.DB
      .prepare(
        `SELECT
          id,
          username,
          email,
          password_hash,
          role,
          created_at,
          avatar_key
         FROM users
         WHERE username = ? COLLATE NOCASE OR email = ?
         LIMIT 1`
      )
      .bind(identifier, identifier.toLowerCase())
      .first<{
        id: number;
        username: string;
        email: string;
        password_hash: string;
        role: string;
        created_at: number;
        avatar_key: string | null;
      }>();

    if (!user) {
      await dummyVerify(password);
      await recordFailure(env.DB, limitKey);

      return json({ error: "Invalid credentials." }, 401);
    }

    const valid = await verifyPassword(password, user.password_hash);

    if (!valid) {
      await recordFailure(env.DB, limitKey);

      return json({ error: "Invalid credentials." }, 401);
    }

    await clearFailures(env.DB, limitKey);

    const sessionId = await createSession(env.DB, user.id);

    // Limpieza ocasional (~2 % de los logins) de sesiones caducadas e intentos viejos
    if (Math.random() < 0.02) {
      try {
        await deleteExpiredSessions(env.DB);
      } catch (err) {
        console.error("Session cleanup failed:", err);
      }

      await cleanupAttempts(env.DB);
    }

    return json(
      {
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          created_at: user.created_at,
          avatar_key: user.avatar_key,
          avatar_url: avatarUrlFor(user.avatar_key),
        },
      },
      200,
      {
        "Set-Cookie": sessionCookie(sessionId),
      }
    );
  } catch (err) {
    return serverError(err);
  }
};
