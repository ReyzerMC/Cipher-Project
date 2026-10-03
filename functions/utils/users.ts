export interface UserLookup {
  id: number;
  username: string;
  email: string;
  email_verified: number;
}

// El usuario no distingue mayúsculas; el email siempre se guarda en minúsculas.
export async function findUserByIdentifier(
  db: D1Database,
  identifier: string
): Promise<UserLookup | null> {
  return db
    .prepare(
      `SELECT id, username, email, email_verified
       FROM users
       WHERE username = ? COLLATE NOCASE OR email = ?
       LIMIT 1`
    )
    .bind(identifier, identifier.toLowerCase())
    .first<UserLookup>();
}
