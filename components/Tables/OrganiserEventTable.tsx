import React from "react";

import { TableCell, TableRow } from "@/components/ui/table";

import { fetchEvent, fetchOrganiserEvent } from "@/utils/fetch/fetchEvents";
import { formatDate } from "@/utils/formatDate/formatDate";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import Link from "next/link";

type ComponentProps = {
  organiser: any;
};

const OrganiserEventTable = async ({ organiser }: ComponentProps) => {
  const session = await getSessionUser();
  const event = await fetchEvent(session, organiser.event_id);
  const sums = await fetchOrganiserEvent(event?.event_id, session, 1);

  return (
    <TableRow key={event?.organiser_id}>
      <TableCell>{event?.event_id}</TableCell>
      <TableCell className="font-semibold">
        <Link
          href={`/dashboard/organiser/events/${event?.event_id}`}
          className="cursor-pointer"
        >
          {event?.name}
        </Link>
      </TableCell>
      <TableCell>{formatDate(event?.date.toString())}</TableCell>
      <TableCell>{sums?.data?.tickets_sold}</TableCell>

      <TableCell>{sums?.data?.total_amount}</TableCell>
    </TableRow>
  );
};

export default OrganiserEventTable;
