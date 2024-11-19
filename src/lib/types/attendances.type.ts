import { z } from "zod";

import { attendances } from "@/db/schema";
import {
  insertAttendancesParams,
  insertAttendancesSchema,
} from "@/lib/validations";

export type Attendance = typeof attendances.$inferSelect;
export type NewAttendance = z.infer<typeof insertAttendancesSchema>;
export type NewAttendanceParams = z.infer<typeof insertAttendancesParams>;
