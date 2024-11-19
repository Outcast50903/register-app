import * as trpc from "@trpc/server";

import { createAttendancesDataAccess } from "@/lib/data-access/attendances.data-access";
import { NewAttendanceParams } from "@/lib/types/attendances.type";
import { insertAttendancesSchema } from "@/lib/validations";
import { handleTrpcErrors } from "@/server/trpc/utils";

export const createAttendancesUseCase = async ({
  attendance,
}: {
  attendance: NewAttendanceParams;
}) => {
  const newAttendance = insertAttendancesSchema.parse({
    ...attendance,
  });

  try {
    const attendance = await createAttendancesDataAccess(newAttendance);

    if (!attendance) {
      throw new trpc.TRPCError({
        code: "BAD_REQUEST",
        message: "attendance cant created it",
      });
    }

    return attendance;
  } catch (err) {
    return handleTrpcErrors(err);
  }
};
