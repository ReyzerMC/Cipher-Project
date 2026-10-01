const SESSION_DURATION = 60 * 60 * 24 * 30;

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: number;
  avatar_key: string | null;
}

function generateSessionId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));

  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function createSession(
  db: D1Database,
  userId: number
): Promise<string> {
  const sessionId = generateSessionId();
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;

  await db
    .prepare(
      `INSERT INTO sessions (id, user_id, expires_at)
       VALUES (?, ?, ?)`
    )
    .bind(sessionId, userId, expiresAt)
    .run();

  return sessionId;
}

export async function getCurrentUser(
  request: Request,
  db: D1Database
): Promise<User | null> {
  const cookie = request.headers.get("Cookie") ?? "";

  const match = cookie.match(/(?:^|;\s*)session_id=([^;]+)/);

  if (!match) {
    return null;
  }

  const sessionId = match[1];

  const session = await db
    .prepare(
      `SELECT
        users.id,
        users.username,
        users.email,
        users.role,
        users.created_at,
        users.avatar_key,
        sessions.expires_at
       FROM sessions
       INNER JOIN users ON users.id = sessions.user_id
       WHERE sessions.id = ?`
    )
    .bind(sessionId)
    .first<{
      id: number;
      username: string;
      email: string;
      role: string;
      created_at: number;
      avatar_key: string | null;
      expires_at: number;
    }>();

  if (!session) {
    return null;
  }

  if (session.expires_at <= Math.floor(Date.now() / 1000)) {
    await db
      .prepare("DELETE FROM sessions WHERE id = ?")
      .bind(sessionId)
      .run();

    return null;
  }

  return {
    id: session.id,
    username: session.username,
    email: session.email,
    role: session.role,
    created_at: session.created_at,
    avatar_key: session.avatar_key,
  };
}

export function sessionCookie(sessionId: string): string {
  return [
    `session_id=${sessionId}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    `Max-Age=${SESSION_DURATION}`,
  ].join("; ");
}

export function clearSessionCookie(): string {
  return [
    "session_id=",
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=0",
  ].join("; ");
}