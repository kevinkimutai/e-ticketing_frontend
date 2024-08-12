"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type ComponentProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Search({ setSearchTerm }: ComponentProps) {
  const [inputSearchTerm, setInputSearchTerm] = useState<string | undefined>();
  return (
    <div className="flex w-full sm:w-4/5 md:w-3/5 lg:w-2/5 items-center space-x-2 py-6">
      <Input
        type="text"
        placeholder="Search for event..."
        onChange={(e) => setInputSearchTerm(e.target.value)}
      />

      <Button type="submit" onClick={() => setSearchTerm(inputSearchTerm)}>
        Search
      </Button>
    </div>
  );
}
