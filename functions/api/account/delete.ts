import { clearSessionCookie, getCurrentUser } from "../../utils/auth";
import {
  MAX_LOGIN_PASSWORD_LENGTH,
  verifyPassword,
} from "../../utils/password";
import { json, serverError } from "../../utils/http";
import {
  clearFailures,
  isRateLimited,
  recordFailure,
  RETRY_AFTER_SECONDS,
  userRateLimitKey,
} from "../../utils/rate-limit";

interface Env {
  DB: D1Database;
  STORAGE: R2Bucket;
}

// Derecho de supresión (RGPD art. 17): el usuario borra su propia cuenta.
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const user = await getCurrentUser(request, env.DB);

    if (!user) {
      return json({ error: "You are not logged in." }, 401);
    }

    let body: { password?: string };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body." }, 400);
    }

    const password = body.password ?? "";

    if (!password) {
      return json(
        { error: "Your password is required to delete your account." },
        400
      );
    }

    if (password.length > MAX_LOGIN_PASSWORD_LENGTH) {
      return json({ error: "Password is incorrect." }, 401);
    }

    const limitKey = userRateLimitKey(user.id);

    if (await isRateLimited(env.DB, limitKey)) {
      return json(
        { error: "Too many failed attempts. Please try again later." },
        429,
        { "Retry-After": String(RETRY_AFTER_SECONDS) }
      );
    }

    const row = await env.DB
      .prepare("SELECT password_hash FROM users WHERE id = ?")
      .bind(user.id)
      .first<{ password_hash: string }>();

    if (!row) {
      return json({ error: "User not found." }, 404);
    }

    if (!(await verifyPassword(password, row.password_hash))) {
      await recordFailure(env.DB, limitKey);

      return json({ error: "Password is incorrect." }, 401);
    }

    await clearFailures(env.DB, limitKey);

    // 1) Avatares en R2 (todo lo que haya bajo avatars/<id>/, incluidos huérfanos).
    //    Se hace antes que la base de datos: si falla, la cuenta sigue existiendo
    //    y el usuario puede reintentar, en vez de dejar archivos sin dueño.
    const prefix = `avatars/${user.id}/`;
    let cursor: string | undefined;

    do {
      const listed = await env.STORAGE.list({ prefix, cursor });

      if (listed.objects.length > 0) {
        await env.STORAGE.delete(listed.objects.map((object) => object.key));
      }

      cursor = listed.truncated ? listed.cursor : undefined;
    } while (cursor);

    // 2) Registros de intentos de login ligados a este usuario/email (si la tabla existe)
    try {
      await env.DB
        .prepare(
          "DELETE FROM login_attempts WHERE key LIKE ? OR key LIKE ?"
        )
        .bind(
          `%|${user.username.toLowerCase()}`,
          `%|${user.email.toLowerCase().slice(0, 64)}`
        )
        .run();
    } catch (err) {
      console.error("login_attempts cleanup failed:", err);
    }

    // 3) Sesiones y usuario, de forma atómica
    await env.DB.batch([
      env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(user.id),
      env.DB
        .prepare("DELETE FROM email_verifications WHERE user_id = ?")
        .bind(user.id),
      env.DB.prepare("DELETE FROM users WHERE id = ?").bind(user.id),
    ]);

    return json(
      { success: true },
      200,
      { "Set-Cookie": clearSessionCookie() }
    );
  } catch (err) {
    return serverError(err);
  }
};
