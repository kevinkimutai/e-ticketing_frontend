import EventAttendee from "@/components/Events/EventAttendee";
import { Button } from "@/components/ui/button";
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
import { fetchOrganiserEvent } from "@/utils/fetch/fetchEvents";

const invoices = [
  {
    id: "001",
    fullname: "John Doe",
    email: "jdoe@email.com",
    nums_tickets: "5",
    ttype: "Regular",
    status: "Paid",
    amount: 5000,
  },
  {
    id: "002",
    fullname: "John Doe",
    email: "jdoe@email.com",
    nums_tickets: "5",
    ttype: "Regular",
    status: "Paid",
    amount: 5000,
  },
  {
    id: "003",
    fullname: "John Doe",
    email: "jdoe@email.com",
    nums_tickets: "5",
    ttype: "Regular",
    status: "Paid",
    amount: 5000,
  },
  {
    id: "004",
    fullname: "John Doe",
    email: "jdoe@email.com",
    nums_tickets: "5",
    ttype: "Regular",
    status: "Paid",
    amount: 5000,
  },
  {
    id: "005",
    fullname: "John Doe",
    email: "jdoe@email.com",
    nums_tickets: "5",
    ttype: "Regular",
    status: "Paid",
    amount: 5000,
  },
];

type ComponentProps = {
  session: string | undefined;
  eventId: number;
};

export async function AttendeesTable({ session, eventId }: ComponentProps) {
  const events = await fetchOrganiserEvent(eventId, session);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="my-4 font-semibold text-xl">Attendees</h2>
        {/* <Button>Download PDF</Button> */}
      </div>
      <Table>
        <TableCaption>Page 1 of Attendees</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>No_Tickets</TableHead>
            <TableHead>Ticket Type</TableHead>
            <TableHead>Status</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.data?.map((e: any) => (
            <EventAttendee event={e} key={e?.attendee_id} />
          ))}
        </TableBody>

        {/* TODO:ADD Total kshs */}
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Kshs 2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </>
  );
}
