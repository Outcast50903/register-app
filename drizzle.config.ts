import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
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
