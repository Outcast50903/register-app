import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { attendances } from "@/db/schema";

const baseSchema = createSelectSchema(attendances);

export const insertAttendancesSchema = createInsertSchema(attendances).omit({
  id: true,
});

export const insertAttendancesParams = baseSchema
  .extend({
    name: z
      .string()
      .min(3, {
        message: "must be at least 3 characters long",
      })
      .max(50, {
        message: "cannot be more than 15 characters long",
      }),
    attendancesDate: z.date(),
  })
  .omit({ id: true });
