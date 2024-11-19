import { neon, neonConfig, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

import * as schema from "@/db/schema";
import { env } from "@/env.mjs";

import { generateFetchEndpoint } from "./utils";

const runMigrate = async () => {
  console.log("⏳ Loading database configuration...");

  neonConfig.fetchEndpoint = (host) => generateFetchEndpoint(host);

  console.log("⏳ Connecting to database...");
  console.log("🚀 ~ process.env.DATABASE_URL:", env.DATABASE_URL);
  const sql: NeonQueryFunction<boolean, boolean> = neon(env.DATABASE_URL!);

  console.log("⏳ Creating database client...");
  const db = drizzle(sql, { schema });

  console.log("⏳ Running migrations...");

  const start = Date.now();

  await migrate(db, { migrationsFolder: "src/db/migrations" });

  const end = Date.now();

  console.log("✅ Migrations completed in", end - start, "ms");

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
