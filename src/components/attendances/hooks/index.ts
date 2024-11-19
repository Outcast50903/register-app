import { TRPCError } from "@trpc/server";
import { toast } from "sonner";

import { NewAttendanceParams } from "@/lib/types/attendances.type";
import { trpc } from "@/server/trpc/client";

export const useAttendance = () => {
  const {
    mutateAsync: createAttendances,
    isLoading,
    isSuccess,
    isError,
  } = trpc.attendances.createAttendances.useMutation();

  const handleSubmit = async (values: NewAttendanceParams) => {
    toast.promise(
      (async () => {
        createAttendances(values);
        return { name: values.name };
      })(),
      {
        loading: "Creating ...",
        error: (err: TRPCError) => {
          return err.message;
        },
        success: () => `Attendance created!`,
      }
    );
  };

  return {
    handleSubmit,
    isLoading,
    isSuccess,
    isError,
  };
};
