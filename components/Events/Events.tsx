"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { Component } from "react";
import { Event, Locations } from "@/types";
import { date } from "zod";
import { formatDate } from "@/utils/formatDate/formatDate";
import Link from "next/link";

type ComponentProps = {
  events: Event[] | undefined;
};

const Events = ({ events }: ComponentProps) => {
  return (
    <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-8 py-6">
      {events?.length == 0 ? (
        <p>No events at the moment</p>
      ) : (
        // <Image
        //   alt={"overlay"}
        //   src={"/party_overlay.png"}
        //   height={400}
        //   width={400}
        //   className="w-full h-[20rem] object-fill"
        // />
        events?.map((event: Event) => (
          <Link
            href={`/event/${event.event_id}`}
            className=""
            key={event.event_id.toString()}
          >
            <div className="flex flex-col border border-gray-500 shadow cursor-pointer max-w-[300px] mx-auto">
              <Image
                alt={event.name}
                src={event.poster_url}
                height={400}
                width={400}
                className="w-full h-[20rem] object-fill"
              />
              <div className="p-4">
                <h2 className="font-semibold">{event.name}</h2>
                <p>{formatDate(event.date.toString())}</p>
                <p className="flex mt-4 items-center text-slate-500">
                  <MapPin size={20} />
                  {event.location}
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Events;
