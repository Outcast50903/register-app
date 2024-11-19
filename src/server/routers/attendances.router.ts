import { createAttendancesUseCase } from "@/lib/use-cases/attendances.use-cases";
import { insertAttendancesParams } from "@/lib/validations";
import { publicProcedure, router } from "@/server/trpc";

export const attendancesRouter = router({
  createAttendances: publicProcedure
    .input(insertAttendancesParams)
    .mutation(async ({ input }) => {
      return await createAttendancesUseCase({
        attendance: input,
      });
    }),
});
