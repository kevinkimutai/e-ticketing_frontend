import React from "react";

import Footer from "@/components/Footer/Footer";

import EventDetails from "@/components/Events/EventDetails";
import EventMap from "@/components/Events/EventMap";
import Header from "@/components/Header/Header";
import APP_URL from "@/constants";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { redirect } from "next/navigation";
import { fetchEvent, fetchLocation } from "@/utils/fetch/fetchEvents";

const page = async ({ params }: { params: { event_id: string } }) => {
  const event_id = params.event_id;
  const session = await getSessionUser();

  const event = await fetchEvent(session, +event_id);
  // Get Location
  const location = await fetchLocation(session, event.location_id);
  // Get Ticket Types

  return (
    <main>
      {/* <Header /> */}
      <section className="px-2 sm:px-4 md:px-6 lg:px-12 ">
        <EventDetails event={event} location={location} />
        <EventMap latitude={event.latitude} longitude={event.longitude} />
      </section>
      <Footer />
    </main>
  );
};

export default page;
