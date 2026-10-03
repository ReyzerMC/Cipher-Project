// Limitador de intentos sencillo sobre D1 (tabla `login_attempts`, ver
// migrations/0002_hardening.sql). Si la tabla no existe o D1 falla, NO bloquea
// el login (falla "abierto"): es una protección extra, no un requisito.
//
// Para algo más robusto, añade además una regla de Rate Limiting de Cloudflare
// sobre /api/auth/* y/o Turnstile en login y registro.

const WINDOW_SECONDS = 15 * 60;
const MAX_ATTEMPTS = 8;

export const RETRY_AFTER_SECONDS = WINDOW_SECONDS;

const now = () => Math.floor(Date.now() / 1000);

export function loginRateLimitKey(request: Request, identifier: string): string {
  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";

  return `login|${ip}|${identifier.toLowerCase().slice(0, 64)}`;
}

export function userRateLimitKey(userId: number): string {
  return `password|${userId}`;
}

export async function isRateLimited(
  db: D1Database,
  key: string
): Promise<boolean> {
  try {
    const row = await db
      .prepare(
        "SELECT count, window_start FROM login_attempts WHERE key = ?"
      )
      .bind(key)
      .first<{ count: number; window_start: number }>();

    if (!row) {
      return false;
    }

    if (row.window_start + WINDOW_SECONDS <= now()) {
      return false;
    }

    return row.count >= MAX_ATTEMPTS;
  } catch (err) {
    console.error("Rate limit check failed:", err);
    return false;
  }
}

export async function recordFailure(
  db: D1Database,
  key: string
): Promise<void> {
  try {
    const current = now();

    await db
      .prepare(
        `INSERT INTO login_attempts (key, count, window_start)
         VALUES (?1, 1, ?2)
         ON CONFLICT(key) DO UPDATE SET
           count = CASE
             WHEN window_start + ?3 <= ?2 THEN 1
             ELSE count + 1
           END,
           window_start = CASE
             WHEN window_start + ?3 <= ?2 THEN ?2
             ELSE window_start
           END`
      )
      .bind(key, current, WINDOW_SECONDS)
      .run();
  } catch (err) {
    console.error("Rate limit record failed:", err);
  }
}

export async function clearFailures(
  db: D1Database,
  key: string
): Promise<void> {
  try {
    await db
      .prepare("DELETE FROM login_attempts WHERE key = ?")
      .bind(key)
      .run();
  } catch (err) {
    console.error("Rate limit clear failed:", err);
  }
}

export async function cleanupAttempts(db: D1Database): Promise<void> {
  try {
    await db
      .prepare("DELETE FROM login_attempts WHERE window_start + ? <= ?")
      .bind(WINDOW_SECONDS, now())
      .run();
  } catch (err) {
    console.error("Rate limit cleanup failed:", err);
  }
}
