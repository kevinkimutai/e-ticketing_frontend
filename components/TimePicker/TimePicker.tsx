"use client";

import * as React from "react";
import { Clock, Clock1, Clock10Icon, Clock1Icon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { TimePickerInput } from "../../utils/time-picker/time-picker-input";
import { Period } from "../../utils/time-picker/time-picker-utils";

interface TimePickerDemoProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function TimePickerDemo({ date, setDate }: TimePickerDemoProps) {
  const [period, setPeriod] = React.useState<Period>("PM");
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 ">
        <div className="w-2/5 text-center">
          <Label htmlFor="hours" className="text-xs">
            Hours
          </Label>
          <TimePickerInput
            picker="hours"
            date={date}
            setDate={setDate}
            ref={hourRef}
            onRightFocus={() => minuteRef.current?.focus()}
          />
        </div>
        <div className="w-2/5 text-center">
          <Label htmlFor="minutes" className="text-xs">
            Minutes
          </Label>
          <TimePickerInput
            picker="minutes"
            date={date}
            setDate={setDate}
            ref={minuteRef}
            onLeftFocus={() => hourRef.current?.focus()}
            onRightFocus={() => secondRef.current?.focus()}
          />
        </div>
        <div className="w-2/5 text-center">
          <Label htmlFor="seconds" className="text-xs">
            Seconds
          </Label>
          <TimePickerInput
            picker="seconds"
            date={date}
            setDate={setDate}
            ref={secondRef}
            onLeftFocus={() => minuteRef.current?.focus()}
          />
        </div>
      </div>
      <p className="flex justify-center items-center text-sm text-slate-500 p-2 text-center">
        <Clock1Icon size={20} className="mr-3" /> Time is in 24/hr format
      </p>
    </>
  );
}
