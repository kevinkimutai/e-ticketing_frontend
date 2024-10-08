"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import Modal from "./Modal";

import TicketTypeInput from "../Inputs/TicketType/TicketTypeInput";

type ComponentProps = {
  session: string | undefined;
  eventId: number;
};

export function TicketTypeModal({ session, eventId }: ComponentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Ticket-Type</Button>
      </DialogTrigger>

      <Modal
        title="Add Your Ticket-Types"
        description="You can choose a variety of ticket-types (Regular,VIP,VVIP)"
      >
        <TicketTypeInput session={session} eventId={eventId} />
      </Modal>
    </Dialog>
  );
}
