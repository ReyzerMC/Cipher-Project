import { sendVerificationEmail } from "./email";
import type { EmailEnv } from "./email";

const CODE_TTL_SECONDS = 15 * 60;
export const RESEND_COOLDOWN_SECONDS = 60;
const MAX_ATTEMPTS = 5;

const now = () => Math.floor(Date.now() / 1000);

// Código de 6 dígitos sin sesgo de módulo (muestreo por rechazo)
function generateCode(): string {
  const buffer = new Uint32Array(1);
  const limit = Math.floor(0x100000000 / 1_000_000) * 1_000_000;

  let value: number;

  do {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= limit);

  return String(value % 1_000_000).padStart(6, "0");
}

async function hashCode(userId: number, code: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`${userId}:${code}`)
  );

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let diff = 0;

  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return diff === 0;
}

export type IssueResult = "sent" | "cooldown" | "failed";

// Crea un código nuevo (sustituye al anterior) y lo envía por email.
export async function issueVerificationCode(
  db: D1Database,
  env: EmailEnv,
  user: { id: number; username: string; email: string },
  logToConsole: boolean
): Promise<IssueResult> {
  const existing = await db
    .prepare("SELECT last_sent_at FROM email_verifications WHERE user_id = ?")
    .bind(user.id)
    .first<{ last_sent_at: number }>();

  if (existing && now() - existing.last_sent_at < RESEND_COOLDOWN_SECONDS) {
    return "cooldown";
  }

  const code = generateCode();
  const current = now();

  await db
    .prepare(
      `INSERT INTO email_verifications
         (user_id, code_hash, expires_at, attempts, last_sent_at)
       VALUES (?1, ?2, ?3, 0, ?4)
       ON CONFLICT(user_id) DO UPDATE SET
         code_hash = ?2,
         expires_at = ?3,
         attempts = 0,
         last_sent_at = ?4`
    )
    .bind(
      user.id,
      await hashCode(user.id, code),
      current + CODE_TTL_SECONDS,
      current
    )
    .run();

  const sent = await sendVerificationEmail(
    env,
    user.email,
    user.username,
    code,
    { logToConsole }
  );

  if (!sent) {
    // Para que el usuario pueda pedir otro enseguida, sin esperar al enfriamiento
    await db
      .prepare("DELETE FROM email_verifications WHERE user_id = ?")
      .bind(user.id)
      .run();

    return "failed";
  }

  return "sent";
}

// Consume un intento ANTES de comparar (atómico): así varias peticiones en paralelo
// no pueden sobrepasar el máximo de intentos.
export async function checkVerificationCode(
  db: D1Database,
  userId: number,
  code: string
): Promise<boolean> {
  const row = await db
    .prepare(
      `UPDATE email_verifications
       SET attempts = attempts + 1
       WHERE user_id = ?1 AND attempts < ?2 AND expires_at > ?3
       RETURNING code_hash`
    )
    .bind(userId, MAX_ATTEMPTS, now())
    .first<{ code_hash: string }>();

  if (!row) {
    return false; // sin código, caducado o demasiados intentos
  }

  if (!safeEqual(row.code_hash, await hashCode(userId, code))) {
    return false;
  }

  await db
    .prepare("DELETE FROM email_verifications WHERE user_id = ?")
    .bind(userId)
    .run();

  return true;
}
