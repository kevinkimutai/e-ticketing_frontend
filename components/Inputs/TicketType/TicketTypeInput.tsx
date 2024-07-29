import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TicketTypeInput = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="name">Ticket Type</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Early Bird</SelectItem>
              <SelectItem value="dark">Regular</SelectItem>
              <SelectItem value="system">VIP</SelectItem>
              <SelectItem value="system">VVIP</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid flex-1 gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <Button>Add Another Type</Button>
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

export default TicketTypeInput;
