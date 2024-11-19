"use client";

import { CheckCircle } from "lucide-react";

const AttendanceSuccess = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <CheckCircle className="text-green-500 w-16 h-16" />
      <p className="text-lg font-semibold text-green-600">Attendance Registered!</p>
      <p className="text-sm text-gray-600">Thank you for registering your attendance.</p>
    </div>
  );
};

export default AttendanceSuccess;