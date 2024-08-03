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
import { Textarea } from "@/components/ui/textarea";

type ComponentProps = {
  onBack: () => void;
  onNext: (val: any) => Promise<void>;
};

const EventInputLocation = ({ onBack, onNext }: ComponentProps) => {
  const [locationName, setLocationName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  return (
    <div>
      <div className="flex flex-col items-center px-4 py-2">
        <div className="grid w-full gap-1.5 mb-4">
          <Label htmlFor="venue">Venue Address</Label>
          <Textarea
            placeholder="venue."
            id="venue"
            onChange={(e) => {
              setLocationName(e.target.value);
            }}
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Brief description</Label>
          <Textarea
            placeholder="description."
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <Button type="button" variant="secondary" onClick={onBack}>
            Cancel
          </Button>

          <Button
            onClick={() => {
              if (locationName) {
                onNext({ location: locationName, description });
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

export default EventInputLocation;
