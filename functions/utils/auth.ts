const SESSION_DURATION = 60 * 60 * 24 * 30;

// 32 bytes en base64url = 43 caracteres
const SESSION_ID_PATTERN = /^[A-Za-z0-9_-]{20,128}$/;

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

// En la base de datos se guarda el SHA-256 del id, no el id: si alguien
// consigue leer la tabla `sessions`, no puede usar esas sesiones.
async function hashSessionId(sessionId: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(sessionId)
  );

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export function getSessionId(request: Request): string | null {
  const cookie = request.headers.get("Cookie") ?? "";

  const match = cookie.match(/(?:^|;\s*)session_id=([^;]+)/);

  if (!match || !SESSION_ID_PATTERN.test(match[1])) {
    return null;
  }

  return match[1];
}

export async function createSession(
  db: D1Database,
  userId: number
): Promise<string> {
  const sessionId = generateSessionId();
  const tokenHash = await hashSessionId(sessionId);
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;

  await db
    .prepare(
      `INSERT INTO sessions (id, user_id, expires_at)
       VALUES (?, ?, ?)`
    )
    .bind(tokenHash, userId, expiresAt)
    .run();

  // El valor "en claro" solo viaja en la cookie
  return sessionId;
}

export async function getCurrentUser(
  request: Request,
  db: D1Database
): Promise<User | null> {
  const sessionId = getSessionId(request);

  if (!sessionId) {
    return null;
  }

  const tokenHash = await hashSessionId(sessionId);

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
    .bind(tokenHash)
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
      .bind(tokenHash)
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

export async function deleteSession(
  db: D1Database,
  sessionId: string
): Promise<void> {
  await db
    .prepare("DELETE FROM sessions WHERE id = ?")
    .bind(await hashSessionId(sessionId))
    .run();
}

// Cierra todas las sesiones del usuario menos la actual (p. ej. al cambiar la contraseña)
export async function deleteOtherSessions(
  db: D1Database,
  userId: number,
  currentSessionId: string | null
): Promise<void> {
  if (!currentSessionId) {
    await db
      .prepare("DELETE FROM sessions WHERE user_id = ?")
      .bind(userId)
      .run();

    return;
  }

  await db
    .prepare("DELETE FROM sessions WHERE user_id = ? AND id != ?")
    .bind(userId, await hashSessionId(currentSessionId))
    .run();
}

export async function deleteExpiredSessions(db: D1Database): Promise<void> {
  await db
    .prepare("DELETE FROM sessions WHERE expires_at <= ?")
    .bind(Math.floor(Date.now() / 1000))
    .run();
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
