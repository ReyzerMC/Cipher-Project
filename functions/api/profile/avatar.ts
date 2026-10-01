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
    return json(
      {
        error: "You must be logged in.",
      },
      401
    );
  }

  const contentType = request.headers.get("Content-Type");

  if (contentType !== "image/webp") {
    return json(
      {
        error: "Only WebP images are accepted.",
      },
      400
    );
  }

  const image = await request.arrayBuffer();

  if (image.byteLength > 5 * 1024 * 1024) {
    return json(
      {
        error: "The image is too large.",
      },
      400
    );
  }

  const oldUser = await env.DB
    .prepare(
      "SELECT avatar_key FROM users WHERE id = ?"
    )
    .bind(user.id)
    .first<{
      avatar_key: string | null;
    }>();

  const key =
    `avatars/${user.id}/${crypto.randomUUID()}.webp`;

  await env.AVATARS.put(key, image, {
    httpMetadata: {
      contentType: "image/webp",
      cacheControl:
        "public, max-age=31536000, immutable",
    },
  });

  await env.DB
    .prepare(
      "UPDATE users SET avatar_key = ? WHERE id = ?"
    )
    .bind(key, user.id)
    .run();

  if (oldUser?.avatar_key) {
    await env.AVATARS.delete(oldUser.avatar_key);
  }

  const avatarUrl =
    `https://cdn.cipher-project.reyzer.org/${key}`;

  return json({
    success: true,
    avatar_key: key,
    avatar_url: avatarUrl,
  });
};