import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const attendances = pgTable("attendances", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  attendancesDate: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});
