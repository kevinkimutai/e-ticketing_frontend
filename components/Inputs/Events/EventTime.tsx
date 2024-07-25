"use client";

import React, { useState } from "react";

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
import { TimePickerDemo } from "@/components/TimePicker/TimePicker";

const EventTime = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div>
      <TimePickerDemo date={date} setDate={setDate} />

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

export default EventTime;
