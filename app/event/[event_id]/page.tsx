import React from "react";

import Footer from "@/components/Footer/Footer";

import EventDetails from "@/components/Events/EventDetails";
import EventMap from "@/components/Events/EventMap";
import Header from "@/components/Header/Header";

import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { Toaster } from "react-hot-toast";
import {
  fetchEvent,
  fetchLocation,
  fetchTicketTypes,
} from "@/utils/fetch/fetchEvents";

const page = async ({ params }: { params: { event_id: string } }) => {
  const event_id = params?.event_id;
  const session = await getSessionUser();

  const event = await fetchEvent(session, +event_id);
  // Get Location
  const location = await fetchLocation(session, event?.location_id);
  // Get Ticket Types
  const ttypes = await fetchTicketTypes(session, +event_id);

  return (
    <>
      <Header />
      <Toaster />
      <main>
        <section className="px-2 sm:px-4 md:px-6 lg:px-12  border border-blue-600">
          <EventDetails
            event={event}
            location={location}
            ttypes={ttypes}
            session={session}
          />
          <EventMap latitude={event?.latitude} longitude={event?.longitude} />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default page;
