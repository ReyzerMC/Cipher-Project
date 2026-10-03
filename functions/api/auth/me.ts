import { getCurrentUser } from "../../utils/auth";
import { avatarUrlFor, json, serverError } from "../../utils/http";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const user = await getCurrentUser(request, env.DB);

    return json({
      authenticated: !!user,
      user: user
        ? {
            ...user,
            avatar_url: avatarUrlFor(user.avatar_key),
          }
        : null,
    });
  } catch (err) {
    return serverError(err);
  }
};
