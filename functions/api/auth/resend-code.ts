import { isLocalRequest } from "../../utils/email";
import type { EmailEnv } from "../../utils/email";
import { json, serverError } from "../../utils/http";
import {
  isRateLimited,
  recordFailure,
  resendRateLimitKey,
  RETRY_AFTER_SECONDS,
} from "../../utils/rate-limit";
import { findUserByIdentifier } from "../../utils/users";
import { issueVerificationCode } from "../../utils/verification";

interface Env extends EmailEnv {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    let body: { identifier?: string };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body." }, 400);
    }

    const identifier = body.identifier?.trim() ?? "";

    if (!identifier || identifier.length > 254) {
      return json({ error: "Username or email is required." }, 400);
    }

    const limitKey = resendRateLimitKey(request, identifier);

    if (await isRateLimited(env.DB, limitKey)) {
      return json(
        { error: "Too many requests. Please try again later." },
        429,
        { "Retry-After": String(RETRY_AFTER_SECONDS) }
      );
    }

    // Cada petición cuenta, exista o no la cuenta (evita usar esto para enviar spam)
    await recordFailure(env.DB, limitKey);

    const user = await findUserByIdentifier(env.DB, identifier);

    if (user && !user.email_verified) {
      await issueVerificationCode(env.DB, env, user, isLocalRequest(request));
    }

    // Respuesta idéntica en todos los casos: no revela si la cuenta existe
    return json({
      success: true,
      message:
        "If an unverified account matches, a new code has been sent. Check your inbox and spam folder.",
    });
  } catch (err) {
    return serverError(err);
  }
};
