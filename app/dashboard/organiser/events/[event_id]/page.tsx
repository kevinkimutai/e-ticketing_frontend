import { AlertEvent } from "@/components/Alert/AlertEvent";
import TicketSalesChart from "@/components/Charts/SalesChart";
import { AttendeesTable } from "@/components/Dashboard/Tables/AttendeesTable";
import EventDashboardDetails from "@/components/Events/EventDashboardDetails";
import { TicketTypeModal } from "@/components/Modal/TicketTypeModal";
import TicketType from "@/components/TicketTypes/TicketType";
import TicketTypeCard from "@/components/TicketTypes/TicketTypeCard";
import { Button } from "@/components/ui/button";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { fetchEvent, fetchTicketTypes } from "@/utils/fetch/fetchEvents";
import Header from "@/components/Header/Header";

import { Contact, Eraser, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { event_id: string } }) => {
  const session = await getSessionUser();
  const event_id = params.event_id;

  const event = await fetchEvent(session, +event_id);
  const ttypes = await fetchTicketTypes(session, +event_id);
  //const attendees = await fetchAttendees();

  return (
    <>
      <Header />
      <main className="px-3 sm:px-6 md:px-12 lg:px-24 py-2 sm:py-4">
        <AlertEvent />

        <EventDashboardDetails
          session={session}
          event={event}
          ttypes={ttypes}
        />
        <TicketTypeCard ttypes={ttypes} />
        {ttypes && (
          <TicketType
            ttypes={ttypes}
            session={session}
            eventId={event.event_id}
          />
        )}

        {/* <TicketSalesChart /> */}

        <AttendeesTable session={session} eventId={+event_id} ttypes={ttypes} />
      </main>
    </>
  );
};

export default page;
