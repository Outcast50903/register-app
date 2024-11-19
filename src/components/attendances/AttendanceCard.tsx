"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthSession } from "@/integrations/auth";

import AttendanceSuccess from "./AttendanceSuccess";
import { useAttendance } from "./hooks";

interface AttendanceCardProps {
  session: AuthSession
}

const AttendanceCard: FC<AttendanceCardProps> = ({ 
  session
}) => {
  console.log("🚀 ~ session:", session)
  const { handleSubmit, isLoading, isSuccess } = useAttendance();
  console.log("🚀 ~ isSuccess:", isSuccess)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Attendance Registration</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!isSuccess ? (
          <Button 
            onClick={() => handleSubmit({ name: session?.session?.user.id || '', attendancesDate: new Date() })} 
            className="w-full max-w-xs"
            disabled={isLoading}
          >
            Register Attendance
          </Button>
        ) : (<AttendanceSuccess />)}
      </CardContent>
    </Card>
  );
};

export default AttendanceCard;