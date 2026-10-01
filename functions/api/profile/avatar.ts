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

  const role = user.role;

  const maxSize =
    role === "USER"
      ? 15 * 1024 * 1024
      : role === "ADMINISTRATOR"
        ? 25 * 1024 * 1024
        : 35 * 1024 * 1024;

  const contentType =
    request.headers.get("Content-Type")?.toLowerCase();

  if (!contentType?.startsWith("image/")) {
    return json(
      {
        error: "Only image files are allowed.",
      },
      400
    );
  }

  const isGif = contentType === "image/gif";

  // USER
  if (role === "USER") {
    const allowed = [
      "image/png",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowed.includes(contentType)) {
      return json(
        {
          error:
            "USER accounts can only upload PNG, JPEG or WebP images.",
        },
        400
      );
    }
  }

  // ADMINISTRATOR
  if (role === "ADMINISTRATOR") {
    const allowed = [
      "image/png",
      "image/jpeg",
      "image/webp",
      "image/gif",
    ];

    if (!allowed.includes(contentType)) {
      return json(
        {
          error: "Unsupported image format.",
        },
        400
      );
    }
  }

  // DEVELOPER / HEAD_DEVELOPER
  // Any image/* MIME type is accepted.

  const image = await request.arrayBuffer();

  if (image.byteLength > maxSize) {
    return json(
      {
        error: `Your role allows images up to ${maxSize / 1024 / 1024} MB.`,
      },
      400
    );
  }

  if (image.byteLength === 0) {
    return json(
      {
        error: "The image is empty.",
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

  /*
   * GIFs remain GIFs.
   *
   * Everything else should already have been converted
   * to WebP by the avatar editor.
   */
  const extension = isGif ? "gif" : "webp";

  const storedContentType = isGif
    ? "image/gif"
    : "image/webp";

  const key =
    `avatars/${user.id}/${crypto.randomUUID()}.${extension}`;

  await env.STORAGE.put(key, image, {
    httpMetadata: {
      contentType: storedContentType,
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