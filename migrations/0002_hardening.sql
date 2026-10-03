-- Cipher Project - endurecimiento de cuentas y sesiones
--
-- Ejecutar DESPUÉS de desplegar el código nuevo:
--   npx wrangler d1 execute cipher-project-db --remote --file=migrations/0002_hardening.sql
--
-- (local: sustituye --remote por --local)

-- 1) Las sesiones ahora se guardan con hash (SHA-256 del id de la cookie).
--    Se borran las antiguas, que estaban en claro: todos tendrán que iniciar
--    sesión una vez más.
DELETE FROM sessions;

CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions (expires_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions (user_id);

-- 2) Usuario único sin distinguir mayúsculas y email único.
--    Si esto falla por duplicados ya existentes, búscalos con:
--      SELECT lower(username), COUNT(*) FROM users GROUP BY 1 HAVING COUNT(*) > 1;
--      SELECT email, COUNT(*) FROM users GROUP BY 1 HAVING COUNT(*) > 1;
--    y renombra o borra los repetidos antes de volver a ejecutar.
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username_nocase
  ON users (username COLLATE NOCASE);

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email
  ON users (email);

-- 3) Límite de intentos de login / cambio de contraseña
CREATE TABLE IF NOT EXISTS login_attempts (
  key          TEXT    PRIMARY KEY,
  count        INTEGER NOT NULL,
  window_start INTEGER NOT NULL
);
