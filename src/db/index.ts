import { neon, neonConfig, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

import { generateFetchEndpoint } from "./utils";

neonConfig.fetchEndpoint = (host) => generateFetchEndpoint(host);

export const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL!
);
export const db = drizzle(sql, { schema });
