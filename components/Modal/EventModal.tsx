"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Modal from "./Modal";
import EventName from "../Inputs/Events/EventName";
import EventCategory from "../Inputs/Events/EventCategory";
import EventPoster from "../Inputs/Events/EventPoster";
import EventTime from "../Inputs/Events/EventTime";
import EventDate from "../Inputs/Events/EventDate";
import EventLocation from "../EventLocation/EventLocation";
import EventInputLocation from "../Inputs/Events/EventLocation";
import EventInputMap from "../Inputs/Events/EventInputMap";

enum STEPS {
  NAME = 0,
  CATEGORIES = 1,
  POSTER_URL = 2,
  DATE = 3,
  FROM_TIME = 4,
  TO_TIME = 5,
  LOCATION = 6,
  MAP = 7,
}

export function EventModal() {
  const [step, setStep] = useState<STEPS>(STEPS.MAP);
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

      {step == 1 && (
        <Modal title="Event Category" description="Your event category">
          <EventCategory />
        </Modal>
      )}

      {step == 2 && (
        <Modal
          title="Event Poster"
          description="A cool poster play a significant role in your events marketing"
        >
          <EventPoster />
        </Modal>
      )}

      {step == 3 && (
        <Modal title="Event Date" description="Date of your event.">
          <EventDate />
        </Modal>
      )}

      {step == 4 && (
        <Modal title="Event Start Time" description="Your event times.">
          <EventTime />
        </Modal>
      )}

      {step == 5 && (
        <Modal title="Event End Time" description="Your event times.">
          <EventTime />
        </Modal>
      )}

      {step == 6 && (
        <Modal
          title="Event Venue"
          description="Add a descriptive address to venue"
        >
          <EventInputLocation />
        </Modal>
      )}

      {step == 7 && (
        <Modal
          title="Finally Event Map Location"
          description="Allow your attendees to use maps for location"
        >
          <EventInputMap />
        </Modal>
      )}
    </Dialog>
  );
}
