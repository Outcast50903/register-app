import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle, NeonDatabase } from "drizzle-orm/neon-serverless";

import * as schema from "@/db/schema";
import { env } from "@/env.mjs";

export type PoolConnection = NeonDatabase<typeof schema>;

/**
 * Generates a pool connection for the NeonDatabase.
 * @returns {PoolConnection} A NeonDatabase instance.
 */
export const generatePoolConnection = (): PoolConnection => {
  if (env.USE_LOCAL_SERVER) {
    neonConfig.poolQueryViaFetch = env.NODE_ENV === "development" || false;
    neonConfig.useSecureWebSocket = !(env.NODE_ENV === "development");
    neonConfig.wsProxy = (host) =>
      env.NODE_ENV === "development" ? `${host}:${4444}/v2` : `${host}/v2`;
  }

  const client = new Pool({ connectionString: env.DATABASE_URL });

  return drizzle(client, { schema });
};
