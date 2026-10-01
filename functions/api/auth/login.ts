import { verifyPassword } from "../../utils/password";
import { createSession, sessionCookie } from "../../utils/auth";

interface Env {
  DB: D1Database;
}

function json(data: unknown, status = 200, headers?: HeadersInit): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
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

  const user = await env.DB
    .prepare(
      `SELECT
        id,
        username,
        email,
        password_hash,
        role,
        created_at
       FROM users
       WHERE username = ? OR email = ?
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
    }>();

  if (!user) {
    return json({ error: "Invalid credentials." }, 401);
  }

  const valid = await verifyPassword(password, user.password_hash);

  if (!valid) {
    return json({ error: "Invalid credentials." }, 401);
  }

  const sessionId = await createSession(env.DB, user.id);

  return json(
    {
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        created_at: user.created_at,
      },
    },
    200,
    {
      "Set-Cookie": sessionCookie(sessionId),
    }
  );
};