export const CDN_URL = "https://cdn.cipher-project.reyzer.org";

export function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      // Las respuestas de la API dependen de la sesión: nunca deben cachearse
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export function avatarUrlFor(key: string | null): string | null {
  return key ? `${CDN_URL}/${key}` : null;
}

// Evita que un fallo de D1/R2 devuelva un 500 en HTML (el front espera JSON)
export function serverError(err: unknown): Response {
  console.error(err);
  return json({ error: "Internal server error. Please try again later." }, 500);
}
