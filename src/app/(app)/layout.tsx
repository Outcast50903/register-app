import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { checkAuth } from "@/integrations/auth";
import TrpcProvider from "@/server/trpc/Provider";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return ( 
    <main>
      <ClerkProvider>
        <TrpcProvider cookies={cookies().toString()}>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
              <Navbar />
              {children}
            </main>
          </div>
        </TrpcProvider>
      </ClerkProvider>
      <Toaster richColors />
    </main> 
  )
}