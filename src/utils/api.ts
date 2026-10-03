// Lee el JSON de una respuesta sin lanzar si el servidor devolvió HTML (p. ej. un 500).
export async function readJson<T>(response: Response): Promise<T | null> {
  try {
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

// Mensaje de error legible: el del servidor si lo hay, o uno genérico con el código HTTP.
export function apiError(
  data: { error?: string } | null,
  status: number,
  fallback: string
): string {
  return data?.error ?? `${fallback} (error ${status}).`;
}
