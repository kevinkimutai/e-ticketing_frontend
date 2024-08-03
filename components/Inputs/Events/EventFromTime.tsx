"use client";

import React, { useState } from "react";

import { DialogFooter } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { TimePickerDemo } from "@/components/TimePicker/TimePicker";

type ComponentProps = {
  onBack: () => void;
  onNext: (val: any) => Promise<void>;
  eventDate: Date;
};

const EventFromTime = ({ onBack, onNext, eventDate }: ComponentProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div>
      <TimePickerDemo date={date} setDate={setDate} />

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <Button type="button" variant="secondary" onClick={onBack}>
            Cancel
          </Button>

          <Button
            onClick={() => {
              // Convert to UTC time components
              if (date) {
                const utcHours = date.getUTCHours();
                const utcMinutes = date.getUTCMinutes();
                const utcSeconds = date.getUTCSeconds();

                const eventDateString = eventDate.toISOString().split("T")[0];

                // Format the time as a string
                const utcTimeString = `${utcHours
                  .toString()
                  .padStart(2, "0")}:${utcMinutes
                  .toString()
                  .padStart(2, "0")}:${utcSeconds.toString().padStart(2, "0")}`;

                const completeDateTimeString = `${eventDateString}T${utcTimeString}Z`;

                onNext({ from_time: completeDateTimeString });
              } else {
                return;
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

export default EventFromTime;
