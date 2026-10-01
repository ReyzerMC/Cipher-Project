import { clearSessionCookie } from "../../utils/auth";

interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const cookie = request.headers.get("Cookie") ?? "";

  const match = cookie.match(/(?:^|;\s*)session_id=([^;]+)/);

  if (match) {
    await env.DB
      .prepare("DELETE FROM sessions WHERE id = ?")
      .bind(match[1])
      .run();
  }

  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": clearSessionCookie(),
      },
    }
  );
};