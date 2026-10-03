import { json, serverError } from "../../utils/http";
import {
  clearFailures,
  isRateLimited,
  recordFailure,
  RETRY_AFTER_SECONDS,
  verifyRateLimitKey,
} from "../../utils/rate-limit";
import { findUserByIdentifier } from "../../utils/users";
import { checkVerificationCode } from "../../utils/verification";

interface Env {
  DB: D1Database;
}

const INVALID = "Invalid or expired code.";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    let body: { identifier?: string; code?: string };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body." }, 400);
    }

    const identifier = body.identifier?.trim() ?? "";
    const code = body.code?.trim() ?? "";

    if (!identifier || identifier.length > 254) {
      return json({ error: "Username or email is required." }, 400);
    }

    if (!/^\d{6}$/.test(code)) {
      return json({ error: "Enter the 6-digit code." }, 400);
    }

    const limitKey = verifyRateLimitKey(request, identifier);

    if (await isRateLimited(env.DB, limitKey)) {
      return json(
        { error: "Too many failed attempts. Please try again later." },
        429,
        { "Retry-After": String(RETRY_AFTER_SECONDS) }
      );
    }

    const user = await findUserByIdentifier(env.DB, identifier);

    // Mismo mensaje exista o no la cuenta: no se revela qué usuarios hay
    if (!user || user.email_verified) {
      await recordFailure(env.DB, limitKey);

      return json({ error: INVALID }, 400);
    }

    if (!(await checkVerificationCode(env.DB, user.id, code))) {
      await recordFailure(env.DB, limitKey);

      return json({ error: INVALID }, 400);
    }

    await env.DB
      .prepare("UPDATE users SET email_verified = 1 WHERE id = ?")
      .bind(user.id)
      .run();

    await clearFailures(env.DB, limitKey);

    // No se inicia sesión aquí: el código demuestra que el email es suyo,
    // pero no que conozca la contraseña. Tendrá que hacer login.
    return json({ success: true });
  } catch (err) {
    return serverError(err);
  }
};
