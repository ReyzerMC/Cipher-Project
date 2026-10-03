import { isLocalRequest } from "../../utils/email";
import type { EmailEnv } from "../../utils/email";
import { hashPassword, validatePassword } from "../../utils/password";
import { json, serverError } from "../../utils/http";
import { issueVerificationCode } from "../../utils/verification";

interface Env extends EmailEnv {
  DB: D1Database;
}

// Cuentas que no verifican su email en este tiempo se borran (liberan usuario y email)
const UNVERIFIED_TTL_SECONDS = 24 * 60 * 60;

const USERNAME_PATTERN = /^[a-zA-Z0-9]{3,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    let body: {
      username?: string;
      email?: string;
      password?: string;
      acceptedTerms?: boolean;
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

    if (body.acceptedTerms !== true) {
      return json(
        {
          error:
            "You must accept the Privacy Policy and the Terms of Use to create an account.",
        },
        400
      );
    }

    if (!USERNAME_PATTERN.test(username)) {
      return json(
        {
          error:
            "Username must be 3-20 characters long and contain only letters and numbers.",
        },
        400
      );
    }

    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return json({ error: "Invalid email address." }, 400);
    }

    const passwordError = validatePassword(password);

    if (passwordError) {
      return json({ error: passwordError }, 400);
    }

    const cutoff = Math.floor(Date.now() / 1000) - UNVERIFIED_TTL_SECONDS;

    await env.DB.batch([
      env.DB
        .prepare(
          `DELETE FROM email_verifications
           WHERE user_id IN (
             SELECT id FROM users
             WHERE email_verified = 0 AND created_at < ?
           )`
        )
        .bind(cutoff),
      env.DB
        .prepare(
          "DELETE FROM users WHERE email_verified = 0 AND created_at < ?"
        )
        .bind(cutoff),
    ]);

    // COLLATE NOCASE: "Reyzer" y "reyzer" cuentan como el mismo usuario
    const existing = await env.DB
      .prepare(
        `SELECT id
         FROM users
         WHERE username = ? COLLATE NOCASE OR email = ?
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

    let userId: number;

    try {
      const result = await env.DB
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

      userId = result.meta.last_row_id;
    } catch (err) {
      // Dos registros simultáneos pueden pasar el SELECT: el índice UNIQUE
      // (migrations/0002_hardening.sql) rechaza el segundo.
      if (String(err).includes("UNIQUE")) {
        return json(
          { error: "Username or email is already registered." },
          409
        );
      }

      throw err;
    }

    // La cuenta queda sin verificar hasta que meta el código que se envía por email.
    // Si el envío falla, la cuenta existe igualmente y puede pedir otro código.
    const issued = await issueVerificationCode(
      env.DB,
      env,
      { id: userId, username, email },
      isLocalRequest(request)
    );

    return json(
      {
        success: true,
        verificationRequired: true,
        emailSent: issued === "sent",
        message: "Account created. Check your email for the verification code.",
      },
      201
    );
  } catch (err) {
    return serverError(err);
  }
};
