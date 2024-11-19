import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle, NeonDatabase } from "drizzle-orm/neon-serverless";

import * as schema from "@/db/schema";

export type PoolConnection = NeonDatabase<typeof schema>;

/**
 * Generates a pool connection for the NeonDatabase.
 * @returns {PoolConnection} A NeonDatabase instance.
 */
export const generatePoolConnection = (): PoolConnection => {
  if (process.env.USE_LOCAL_SERVER) {
    neonConfig.poolQueryViaFetch =
      process.env.NODE_ENV === "development" || false;
    neonConfig.useSecureWebSocket = !(process.env.NODE_ENV === "development");
    neonConfig.wsProxy = (host) =>
      process.env.NODE_ENV === "development"
        ? `${host}:${4444}/v2`
        : `${host}/v2`;
  }

  const client = new Pool({ connectionString: process.env.DATABASE_URL });

  return drizzle(client, { schema });
};
