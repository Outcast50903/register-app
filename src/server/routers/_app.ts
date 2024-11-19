import { router } from "@/server/trpc";

import { attendancesRouter } from "./attendances.router";

export const appRouter = router({
  attendances: attendancesRouter,
});

export type AppRouter = typeof appRouter;
