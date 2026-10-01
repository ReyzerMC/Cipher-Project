import { getCurrentUser } from "../../utils/auth";

interface Env {
  DB: D1Database;
}

const CDN_URL = "https://cdn.cipher-project.reyzer.org";

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getCurrentUser(request, env.DB);

  return new Response(
    JSON.stringify({
      authenticated: !!user,
      user: user
        ? {
            ...user,
            avatar_url: user.avatar_key
              ? `${CDN_URL}/${user.avatar_key}`
              : null,
          }
        : null,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};