import { Event } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Eraser } from "lucide-react";
import { TicketTypeModal } from "../Modal/TicketTypeModal";
import { formatDate } from "@/utils/formatDate/formatDate";
import { redirect } from "next/navigation";

type ComponentProps = {
  event: Event;
  session: string | undefined;
  ttypes: any;
};

const EventDashboardDetails = ({ session, event, ttypes }: ComponentProps) => {
  return (
    <section className="flex flex-col sm:flex-row items-start gap-4 my-4">
      <div className="w-full sm:w-3/4 md:w-1/2">
        <div className="flex align-center justify-between mb-4">
          <h1 className="font-bold text-3xl">{event?.name}</h1>
          <div className="text-sm font-semibold">
            {formatDate(event?.date.toString())}
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Link href={"/dashboard/organiser/events/16/edit"}>
            <Button variant={"outline"} className="flex items-center">
              <Eraser className="text-red-400 mr-2" />
              <span className="font-semibold">Edit</span>
            </Button>
          </Link>
        </div>
      </div>
      {!ttypes && (
        <div className=" mx-auto w-3/4 sm:w-1/2">
          <div className="flex flex-col justify-center items-center p-4 border border-gray-300 rounded-2xl">
            <p className="mb-4">You havent added your ticket types</p>
            <TicketTypeModal session={session} eventId={+event?.event_id} />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDashboardDetails;
