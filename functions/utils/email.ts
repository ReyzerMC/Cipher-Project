// Envío de correos con Resend (https://resend.com).
//
// Configuración (una vez):
//   1. Resend -> Domains -> añade reyzer.org y crea los registros DNS que te indique en Cloudflare.
//   2. Resend -> API Keys -> crea una clave con permiso "Sending access" para ese dominio.
//   3. npx wrangler pages secret put RESEND_API_KEY --project-name=cipher-project
//      (en local: archivo .dev.vars con  RESEND_API_KEY=re_xxx )
//
// Opcionales (variables, no secretos): EMAIL_FROM y EMAIL_REPLY_TO.

export interface EmailEnv {
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  EMAIL_REPLY_TO?: string;
}

const DEFAULT_FROM = "Cipher Project <no-reply@reyzer.org>";
const DEFAULT_REPLY_TO = "cipher-project@reyzer.org";

export function isLocalRequest(request: Request): boolean {
  const { hostname } = new URL(request.url);

  return hostname === "localhost" || hostname === "127.0.0.1";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Devuelve true si Resend aceptó el envío.
export async function sendVerificationEmail(
  env: EmailEnv,
  to: string,
  username: string,
  code: string,
  options: { logToConsole?: boolean } = {}
): Promise<boolean> {
  if (!env.RESEND_API_KEY) {
    // Solo en desarrollo local se imprime el código; en producción NUNCA se registra.
    if (options.logToConsole) {
      console.log(`[dev] Verification code for ${to}: ${code}`);
      return true;
    }

    console.error("RESEND_API_KEY is not configured.");
    return false;
  }

  const safeName = escapeHtml(username);

  const text =
    `Hi ${username},\n\n` +
    `Your Cipher Project verification code is: ${code}\n\n` +
    `It expires in 15 minutes. If you did not create an account, ` +
    `you can ignore this email.\n`;

  const html =
    `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#1a1d33">` +
    `<h2 style="margin:0 0 12px">Verify your email</h2>` +
    `<p>Hi ${safeName}, use this code to finish creating your Cipher Project account:</p>` +
    `<p style="font-size:32px;letter-spacing:8px;font-weight:700;margin:20px 0">${code}</p>` +
    `<p style="color:#555">It expires in 15 minutes. If you did not create an account, ` +
    `you can ignore this email.</p>` +
    `</div>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM ?? DEFAULT_FROM,
        to: [to],
        reply_to: env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO,
        subject: `${code} is your Cipher Project verification code`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      // Se registra el motivo de Resend, nunca el código
      console.error(
        "Resend rejected the email:",
        response.status,
        await response.text()
      );
      return false;
    }

    return true;
  } catch (err) {
    console.error("Resend request failed:", err);
    return false;
  }
}
