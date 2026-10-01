import { getCurrentUser } from "../../utils/auth";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getCurrentUser(request, env.DB);

  return new Response(
    JSON.stringify({
      authenticated: !!user,
      user,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};