import { clearSessionCookie, deleteSession, getSessionId } from "../../utils/auth";
import { json, serverError } from "../../utils/http";

interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const sessionId = getSessionId(request);

    if (sessionId) {
      await deleteSession(env.DB, sessionId);
    }

    return json(
      { success: true },
      200,
      { "Set-Cookie": clearSessionCookie() }
    );
  } catch (err) {
    return serverError(err);
  }
};
