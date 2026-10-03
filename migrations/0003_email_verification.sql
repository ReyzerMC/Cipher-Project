-- Cipher Project - verificación de email por código
--
-- IMPORTANTE: ejecutar ANTES de desplegar el código nuevo (es compatible con el
-- código antiguo, que simplemente ignora la columna nueva):
--   npx wrangler d1 execute cipher-project-db --remote --file=migrations/0003_email_verification.sql

-- 1) Marca de email verificado (las cuentas nuevas empiezan en 0).
ALTER TABLE users ADD COLUMN email_verified INTEGER NOT NULL DEFAULT 0;

-- 2) Las cuentas que YA existen se dan por verificadas, para no dejar a nadie
--    sin poder entrar. Si prefieres obligarlas a verificar, borra esta línea
--    (entonces tendrán que pasar por el flujo de verificación al iniciar sesión).
UPDATE users SET email_verified = 1;

-- 3) Un código activo por usuario. Se guarda el hash, no el código.
CREATE TABLE IF NOT EXISTS email_verifications (
  user_id      INTEGER PRIMARY KEY,
  code_hash    TEXT    NOT NULL,
  expires_at   INTEGER NOT NULL,
  attempts     INTEGER NOT NULL DEFAULT 0,
  last_sent_at INTEGER NOT NULL
);
