import { db } from "@/db";
import { attendances } from "@/db/schema";
import { NewAttendance } from "@/lib/types/attendances.type";

export const createAttendancesDataAccess = async (data: NewAttendance) => {
  const [attendance] = await db
    .insert(attendances)
    .values({
      ...data,
    })
    .returning()
    .execute();

  return attendance;
};
