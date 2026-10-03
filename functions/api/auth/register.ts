import { hashPassword, validatePassword } from "../../utils/password";
import { json, serverError } from "../../utils/http";

interface Env {
  DB: D1Database;
}

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

    try {
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

    return json(
      {
        success: true,
        message: "Account created successfully.",
      },
      201
    );
  } catch (err) {
    return serverError(err);
  }
};
