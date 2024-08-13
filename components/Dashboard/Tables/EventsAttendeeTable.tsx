import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/formatDate/formatDate";

type ComponentProps = {
  events: any;
};

export function EventsAttendeeTable({ events }: ComponentProps) {
  return (
    <Table>
      <TableCaption>page 1 of your events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Payment ID</TableHead>
          <TableHead>Tickets</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.data?.map((event: any) => (
          <TableRow key={event?.attendee_id}>
            <TableCell>{event?.attendee_id}</TableCell>
            <TableCell className="font-semibold">{event?.event_name}</TableCell>
            <TableCell>{formatDate(event?.event_date)}</TableCell>
            <TableCell>
              {!event?.payment_id ? "Null" : event?.payment_id}
            </TableCell>
            <TableCell>{event?.quantity}</TableCell>
            <TableCell className="text-right">{event?.total_amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            Kshs {events?.total_spent}.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
