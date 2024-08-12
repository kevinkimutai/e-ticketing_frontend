import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  fetchAttendee,
  fetchOrder,
  fetchTicket,
  fetchTicketOrderItem,
  fetchUser,
} from "@/utils/fetch/fetchEvents";

type ComponentProps = {
  event: any;
};

const EventAttendee = async ({ event }: ComponentProps) => {
  return (
    <>
      <TableRow key={event?.attendee_id}>
        <TableCell>{event?.attendee_id}</TableCell>
        <TableCell className="font-semibold">{event?.full_name}</TableCell>
        <TableCell>{event?.email}</TableCell>
        <TableCell>{event?.quantity}</TableCell>
        <TableCell>{event?.ticket_type_name}</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell className="text-right">{event?.total}</TableCell>
      </TableRow>
    </>
  );
};

export default EventAttendee;
