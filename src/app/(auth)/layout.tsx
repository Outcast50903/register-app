import { ClerkProvider } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getUserAuth } from "@/integrations/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect("/dashboard");

  return (
    <div className="bg-muted h-screen pt-8">
      <ClerkProvider>{children}</ClerkProvider>
    </div> 
  );
}
