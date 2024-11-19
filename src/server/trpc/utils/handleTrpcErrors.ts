import * as trpc from "@trpc/server";

export const handleTrpcErrors = (err: unknown) => {
  const message = (err as trpc.TRPCError).message ?? "Error, please try again";
  const code = (err as trpc.TRPCError).code ?? "INTERNAL_SERVER_ERROR";
  throw new trpc.TRPCError({
    code,
    message,
  });
};
