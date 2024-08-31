import { AlertEvent } from "@/components/Alert/AlertEvent";
import TicketSalesChart from "@/components/Charts/SalesChart";
import { AttendeesTable } from "@/components/Dashboard/Tables/AttendeesTable";
import EventDashboardDetails from "@/components/Events/EventDashboardDetails";
import { TicketTypeModal } from "@/components/Modal/TicketTypeModal";
import TicketType from "@/components/TicketTypes/TicketType";
import TicketTypeCard from "@/components/TicketTypes/TicketTypeCard";
import { Button } from "@/components/ui/button";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import {
  fetchEvent,
  fetchOrganiserEvent,
  fetchTicketTypes,
} from "@/utils/fetch/fetchEvents";
import Header from "@/components/Header/Header";

import { Contact, Eraser, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer/Footer";
import AdmittedCard from "@/components/Cards/AdmittedCard";

const page = async ({
  params,
  searchParams,
}: {
  params: { event_id: string };
  searchParams: any;
}) => {
  const session = await getSessionUser();
  const event_id = params.event_id;

  const event = await fetchEvent(session, +event_id);
  const ttypes = await fetchTicketTypes(session, +event_id);
  const events = await fetchOrganiserEvent(+event_id, session, 1);

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

        <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8">
          <AdmittedCard
            admitted={events.data.tickets_admitted}
            notAdmitted={events.data.tickets_not_admitted}
          />
          <div className="hidden md:flex w-2/3  justify-center items-center">
            <p className="font-semibold p-6 border border-black rounded-lg">
              Sales Graph coming soon
            </p>
          </div>
        </div>

        <AttendeesTable
          session={session}
          eventId={+event_id}
          page={searchParams?.page}
        />
      </main>
      <Footer />
    </>
  );
};

export default page;
