import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

const EventName = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
      </div>

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button>Next</Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default EventName;
