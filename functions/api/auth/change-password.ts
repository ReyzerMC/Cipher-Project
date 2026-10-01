import { getCurrentUser } from "../../utils/auth";
import { hashPassword, verifyPassword } from "../../utils/password";

interface Env {
  DB: D1Database;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
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

  if (!/^[a-zA-Z0-9]+$/.test(newPassword)) {
    return json(
      { error: "Password must contain only letters and numbers." },
      400
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
    return json({ error: "Current password is incorrect." }, 401);
  }

  const newHash = await hashPassword(newPassword);

  await env.DB
    .prepare("UPDATE users SET password_hash = ? WHERE id = ?")
    .bind(newHash, user.id)
    .run();

  return json({
    success: true,
    message: "Password changed successfully.",
  });
};