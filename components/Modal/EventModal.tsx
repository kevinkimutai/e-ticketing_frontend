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
import EventTime from "../Inputs/Events/EventFromTime";
import EventDate from "../Inputs/Events/EventDate";
import EventLocation from "../EventLocation/EventLocation";
import EventInputLocation from "../Inputs/Events/EventLocation";
import EventInputMap from "../Inputs/Events/EventInputMap";
import EventFromTime from "../Inputs/Events/EventFromTime";
import EventToTime from "../Inputs/Events/EventToTime";
import { Event } from "@/types";
import APP_URL from "@/constants";
import { redirect, useRouter } from "next/navigation";

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

export function EventModal({ session }: any) {
  const [step, setStep] = useState<STEPS>(STEPS.NAME);
  const [event, setEvent] = useState<Event | null>(null);
  const router = useRouter();

  const createEvent = async (event: Event | null) => {
    try {
      const res = await fetch(`${APP_URL}/api/v1/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
        body: JSON.stringify(event),
      });

      if (res.ok) {
        const { data } = await res.json();
        return data;
      } else {
        const data = await res.json();

        console.log(data);

        if (data.message == "Failedd To Verify Token") {
          redirect("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const onBack = () => {
    setStep((prevState) => prevState - 1);
  };

  const onNext = async (val: any) => {
    if (step == 7) {
      // Submit To BE
      const e = { ...event, ...val };

      console.log(e);

      // @ts-ignore
      const data = await createEvent(e);

      router.push(`/dashboard/organiser/events/${data?.event_id}`);
    } else {
      setEvent((prevState) => {
        const newState = { ...prevState, ...val };
        console.log("Updated state:", newState);
        return newState;
      });
      setStep((prevState) => prevState + 1);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-cyan-700 hover:bg-cyan-500  transition-all">
          Ticket Your Event
        </Button>
      </DialogTrigger>

      {/* Dynamic Inputs Based on Steps */}
      {step == 0 && (
        <Modal
          title="Event Name"
          description="The name of your event.click next to move to next section"
        >
          <EventName onNext={onNext} />
        </Modal>
      )}

      {step == 1 && (
        <Modal title="Event Category" description="Your event category">
          <EventCategory onNext={onNext} onBack={onBack} session={session} />
        </Modal>
      )}

      {step == 2 && (
        <Modal
          title="Event Poster"
          description="A cool poster play a significant role in your events marketing"
        >
          <EventPoster onNext={onNext} onBack={onBack} />
        </Modal>
      )}

      {step == 3 && (
        <Modal title="Event Date" description="Date of your event.">
          <EventDate onNext={onNext} onBack={onBack} />
        </Modal>
      )}

      {step == 4 && (
        <Modal title="Event Start Time" description="Your event times.">
          <EventFromTime
            onNext={onNext}
            onBack={onBack}
            eventDate={event!.date}
          />
        </Modal>
      )}

      {step == 5 && (
        <Modal title="Event End Time" description="Your event times.">
          <EventToTime
            onNext={onNext}
            onBack={onBack}
            eventDate={event!.date}
          />
        </Modal>
      )}

      {step == 6 && (
        <Modal
          title="Event Venue"
          description="Add a descriptive address to venue"
        >
          <EventInputLocation
            session={session}
            onNext={onNext}
            onBack={onBack}
          />
        </Modal>
      )}

      {step == 7 && (
        <Modal
          title="Finally Event Map Location"
          description="Allow your attendees to use maps for location"
        >
          <EventInputMap onNext={onNext} onBack={onBack} />
        </Modal>
      )}
    </Dialog>
  );
}
