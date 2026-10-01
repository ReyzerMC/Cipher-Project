import { Response, type D1Database, type PagesFunction } from "@cloudflare/workers-types";

interface Env {
    DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const result = await env.DB
    .prepare("SELECT 1 AS test")
    .first();

  return Response.json(result);
};
