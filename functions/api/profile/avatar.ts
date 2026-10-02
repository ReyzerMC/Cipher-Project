import { getCurrentUser } from "../../utils/auth";

interface Env {
  DB: D1Database;
  STORAGE: R2Bucket;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const EXTENSIONS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
};

export const onRequestPost: PagesFunction<Env> = async ({
  request,
  env,
}) => {
  const user = await getCurrentUser(request, env.DB);

  if (!user) {
    return json({ error: "You must be logged in." }, 401);
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
    return json({ error: "Only image files are allowed." }, 400);
  }

  // USER
  if (role === "USER") {
    const allowed = ["image/png", "image/jpeg", "image/webp"];

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
      return json({ error: "Unsupported image format." }, 400);
    }
  }

  // DEVELOPER / HEAD_DEVELOPER
  // Any image/* MIME type is accepted.

  const image = await request.arrayBuffer();

  if (image.byteLength === 0) {
    return json({ error: "The image is empty." }, 400);
  }

  if (image.byteLength > maxSize) {
    return json(
      {
        error: `Your role allows images up to ${maxSize / 1024 / 1024} MB.`,
      },
      400
    );
  }

  const oldUser = await env.DB
    .prepare("SELECT avatar_key FROM users WHERE id = ?")
    .bind(user.id)
    .first<{ avatar_key: string | null }>();

  // Keep the original format. Fallback for DEVELOPER roles (any image/*).
  const extension =
    EXTENSIONS[contentType] ??
    contentType.split("/")[1]?.replace(/[^a-z0-9]/g, "") ??
    "bin";

  const key =
    `avatars/${user.id}/${crypto.randomUUID()}.${extension}`;

  await env.STORAGE.put(key, image, {
    httpMetadata: {
      contentType,
      cacheControl: "public, max-age=31536000, immutable",
    },
  });

  await env.DB
    .prepare("UPDATE users SET avatar_key = ? WHERE id = ?")
    .bind(key, user.id)
    .run();

  // Delete the previous avatar; a failure here must not fail the upload.
  if (oldUser?.avatar_key) {
    try {
      await env.STORAGE.delete(oldUser.avatar_key);
    } catch (err) {
      console.error("Failed to delete old avatar:", err);
    }
  }

  const avatarUrl =
    `https://cdn.cipher-project.reyzer.org/${key}`;

  return json({
    success: true,
    avatar_key: key,
    avatar_url: avatarUrl,
  });
};