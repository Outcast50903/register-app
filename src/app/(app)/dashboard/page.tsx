import AttendanceCard from "@/components/attendances/AttendanceCard";
import { getUserAuth } from "@/integrations/auth";

export default async function Home() {
  const userAuth = await getUserAuth();
  
  return (
    <main className="space-y-6">
      <AttendanceCard session={userAuth} />
    </main>
  );
}
