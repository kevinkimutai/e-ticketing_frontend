import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertEvent() {
  return (
    <Alert className="bg-yellow-200 mt-10">
      <Terminal className="h-4 w-4 " />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        We charge 10% facilitation fee for your event.
      </AlertDescription>
    </Alert>
  );
}
