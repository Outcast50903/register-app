import { defineConfig } from "drizzle-kit";

import { env } from "@/env.mjs";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
  tablesFilter: ["app_*"],
  entities: {
    roles: {
      provider: "neon",
    },
  },
  casing: "snake_case",
  extensionsFilters: ["postgis"],
  verbose: true,
  strict: true,
});
