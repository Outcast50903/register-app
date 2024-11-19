import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/integrations/auth";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <main className="space-y-6">
      <Link href="/account">
        <Button variant="outline">Account and Billing</Button>
      </Link>
      <pre 
        className="bg-secondary p-4 rounded-sm shadow-sm text-secondary-foreground break-all whitespace-break-spaces"
      >
        {JSON.stringify(userAuth, null, 2)}
      </pre>
    </main>
  );
}
