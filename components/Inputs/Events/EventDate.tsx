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
import { Copy } from "lucide-react";
import { DatePickerDemo } from "./DateComponent";

type ComponentProps = {
  onBack: () => void;
  onNext: (val: any) => Promise<void>;
};

const EventDate = ({ onBack, onNext }: ComponentProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <div>
      <DatePickerDemo date={date} setDate={setDate} />

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              if (date) {
                onNext({ date: new Date(date.toISOString()) });
              }
            }}
          >
            Next
          </Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default EventDate;
