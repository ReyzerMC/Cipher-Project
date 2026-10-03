import {
  deleteOtherSessions,
  getCurrentUser,
  getSessionId,
} from "../../utils/auth";
import {
  hashPassword,
  MAX_LOGIN_PASSWORD_LENGTH,
  validatePassword,
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
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const user = await getCurrentUser(request, env.DB);

    if (!user) {
      return json({ error: "You are not logged in." }, 401);
    }

    let body: {
      currentPassword?: string;
      newPassword?: string;
    };

    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid request body." }, 400);
    }

    const currentPassword = body.currentPassword ?? "";
    const newPassword = body.newPassword ?? "";

    if (!currentPassword || !newPassword) {
      return json({ error: "Both passwords are required." }, 400);
    }

    if (currentPassword.length > MAX_LOGIN_PASSWORD_LENGTH) {
      return json({ error: "Current password is incorrect." }, 401);
    }

    const passwordError = validatePassword(newPassword);

    if (passwordError) {
      return json({ error: passwordError }, 400);
    }

    if (newPassword === currentPassword) {
      return json(
        { error: "The new password must be different from the current one." },
        400
      );
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

    const valid = await verifyPassword(
      currentPassword,
      row.password_hash
    );

    if (!valid) {
      await recordFailure(env.DB, limitKey);

      return json({ error: "Current password is incorrect." }, 401);
    }

    await clearFailures(env.DB, limitKey);

    const newHash = await hashPassword(newPassword);

    await env.DB
      .prepare("UPDATE users SET password_hash = ? WHERE id = ?")
      .bind(newHash, user.id)
      .run();

    // Si alguien tenía una sesión robada, deja de valer; la actual se mantiene
    await deleteOtherSessions(env.DB, user.id, getSessionId(request));

    return json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (err) {
    return serverError(err);
  }
};
