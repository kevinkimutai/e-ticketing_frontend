import { AlertEvent } from "@/components/Alert/AlertEvent";
import { AttendeesTable } from "@/components/Dashboard/Tables/AttendeesTable";
import EventDashboardDetails from "@/components/Events/EventDashboardDetails";
import { TicketTypeModal } from "@/components/Modal/TicketTypeModal";
import TicketType from "@/components/TicketTypes/TicketType";
import TicketTypeCard from "@/components/TicketTypes/TicketTypeCard";
import { Button } from "@/components/ui/button";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { fetchEvent, fetchTicketTypes } from "@/utils/fetch/fetchEvents";

import { Contact, Eraser, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { event_id: string } }) => {
  const session = await getSessionUser();
  const event_id = params.event_id;

  const event = await fetchEvent(session, +event_id);
  const ttypes = await fetchTicketTypes(session, +event_id);

  return (
    <main className="px-3 sm:px-6 md:px-12 lg:px-24 py-2 sm:py-4">
      <AlertEvent />

      <EventDashboardDetails session={session} event={event} />
      <TicketType ticketTypes={ttypes} />

      {/* CARDS INFO */}
      <TicketTypeCard ttypes={ttypes} />
      {/* CHARTS INFO */}

      {/* TABLE */}
      <h2 className="my-4 font-semibold text-xl">Attendees</h2>
      <AttendeesTable />
    </main>
  );
};

export default page;
