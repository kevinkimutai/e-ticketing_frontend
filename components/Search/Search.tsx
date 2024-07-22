import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="flex  w-2/5 items-center space-x-2 py-6">
      <Input type="text" placeholder="Search for event..." />
      <Button type="submit">Search</Button>
    </div>
  );
}
