import { hashPassword } from "../../utils/password";

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
  let body: {
    username?: string;
    email?: string;
    password?: string;
  };

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const username = body.username?.trim();
  const email = body.email?.trim().toLowerCase();
  const password = body.password ?? "";

  if (!username || !email || !password) {
    return json({ error: "All fields are required." }, 400);
  }

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return json(
      { error: "Username must contain only letters and numbers." },
      400
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid email address." }, 400);
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return json(
      { error: "Password must contain only letters and numbers." },
      400
    );
  }

  const existing = await env.DB
    .prepare(
      `SELECT id
       FROM users
       WHERE username = ? OR email = ?
       LIMIT 1`
    )
    .bind(username, email)
    .first();

  if (existing) {
    return json(
      { error: "Username or email is already registered." },
      409
    );
  }

  const passwordHash = await hashPassword(password);

  await env.DB
    .prepare(
      `INSERT INTO users
       (username, email, password_hash, role, created_at)
       VALUES (?, ?, ?, 'USER', ?)`
    )
    .bind(
      username,
      email,
      passwordHash,
      Math.floor(Date.now() / 1000)
    )
    .run();

  return json({
    success: true,
    message: "Account created successfully.",
  }, 201);
};