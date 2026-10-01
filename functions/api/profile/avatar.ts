import { getCurrentUser } from "../../utils/auth";

interface Env {
  DB: D1Database;
  AVATARS: R2Bucket;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({
  request,
  env,
}) => {
  const user = await getCurrentUser(request, env.DB);

  if (!user) {
    return json({ error: "You are not logged in." }, 401);
  }

  const contentType = request.headers.get("Content-Type") ?? "";

  if (contentType !== "image/webp") {
    return json(
      { error: "Only WebP images are allowed." },
      400
    );
  }

  const data = await request.arrayBuffer();

  if (data.byteLength > 5 * 1024 * 1024) {
    return json(
      { error: "Image is too large. Maximum size is 5 MB." },
      400
    );
  }

  const key = `avatars/${user.id}/${crypto.randomUUID()}.webp`;

  await env.AVATARS.put(key, data, {
    httpMetadata: {
      contentType: "image/webp",
      cacheControl: "public, max-age=31536000, immutable",
    },
  });

  const oldAvatar = await env.DB
    .prepare("SELECT avatar_key FROM users WHERE id = ?")
    .bind(user.id)
    .first<{ avatar_key: string | null }>();

  await env.DB
    .prepare("UPDATE users SET avatar_key = ? WHERE id = ?")
    .bind(key, user.id)
    .run();

  if (oldAvatar?.avatar_key) {
    await env.STORAGE.delete(oldAvatar.avatar_key);
  }

  return json({
    success: true,
    avatar_key: key,
  });
};