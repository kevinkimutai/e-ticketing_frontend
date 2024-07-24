"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Modal from "./Modal";
import EventName from "../Inputs/Events/EventName";

enum STEPS {
  NAME = 0,
  CATEGORIES = 1,
  POSTER_URL = 2,
  DATES = 3,
  LOCATION = 4,
  MAP = 5,
}

export function EventModal() {
  const [step, setStep] = useState<STEPS>(STEPS.NAME);
  const [event, setEvent] = useState<Event | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ticket Your Event</Button>
      </DialogTrigger>

      {/* Dynamic Inputs Based on Steps */}
      {step == 0 && (
        <Modal
          title="Event Name"
          description="The name of your event.click next to move to next section"
        >
          <EventName />
        </Modal>
      )}
    </Dialog>
  );
}
