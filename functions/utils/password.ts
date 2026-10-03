const ITERATIONS = 100_000;
const HASH_LENGTH = 32;

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);

  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();

  const salt = crypto.getRandomValues(new Uint8Array(16));

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    HASH_LENGTH * 8
  );

  const hash = new Uint8Array(derivedBits);

  return [
    "pbkdf2",
    ITERATIONS,
    bytesToBase64(salt),
    bytesToBase64(hash),
  ].join("$");
}

export async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  const parts = storedHash.split("$");

  if (parts.length !== 4 || parts[0] !== "pbkdf2") {
    return false;
  }

  const iterations = Number(parts[1]);

  if (!Number.isInteger(iterations) || iterations <= 0) {
    return false;
  }

  const salt = base64ToBytes(parts[2]);
  const expectedHash = base64ToBytes(parts[3]);

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations,
      hash: "SHA-256",
    },
    keyMaterial,
    expectedHash.length * 8
  );

  const actualHash = new Uint8Array(derivedBits);

  if (actualHash.length !== expectedHash.length) {
    return false;
  }

  let difference = 0;

  for (let i = 0; i < actualHash.length; i++) {
    difference |= actualHash[i] ^ expectedHash[i];
  }

  return difference === 0;
}

// ---------------------------------------------------------------------------
// Política de contraseñas
// ---------------------------------------------------------------------------

export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 128;

// En login se acepta más largo que el máximo de registro para no bloquear
// a nadie con una contraseña antigua, pero se limita para no gastar CPU.
export const MAX_LOGIN_PASSWORD_LENGTH = 1024;

export function validatePassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`;
  }

  if (password.length > MAX_PASSWORD_LENGTH) {
    return `Password must be at most ${MAX_PASSWORD_LENGTH} characters long.`;
  }

  return null;
}

// Cuando el usuario no existe se hace igualmente un hash, para que la
// respuesta tarde lo mismo y no se pueda averiguar qué usuarios existen.
let dummyHash: Promise<string> | null = null;

export async function dummyVerify(password: string): Promise<void> {
  dummyHash ??= hashPassword("cipher-project-dummy-password");
  await verifyPassword(password, await dummyHash);
}
