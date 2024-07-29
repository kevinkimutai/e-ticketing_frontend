"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";
import Modal from "./Modal";

import TicketTypeInput from "../Inputs/TicketType/TicketTypeInput";

type Ttype = {};

export function TicketTypeModal() {
  const [ttype, setTtype] = useState<Ttype | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Ticket-Type</Button>
      </DialogTrigger>

      <Modal
        title="Add Your Ticket-Types"
        description="We offer the following ticket types (Regular,VIP,VVIP)"
      >
        <TicketTypeInput />
      </Modal>
    </Dialog>
  );
}
