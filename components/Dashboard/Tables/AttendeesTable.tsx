import DownloadAttendeesPDF from "@/components/Btns/DownloadAttendeesPDF";
import EventAttendee from "@/components/Events/EventAttendee";
import DashboardPaginate from "@/components/Paginate/DashboardPaginate";
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

type ComponentProps = {
  session: string | undefined;
  eventId: number;
  page: number | undefined;
};

export async function AttendeesTable({
  session,
  eventId,
  page,
}: ComponentProps) {
  const events = await fetchOrganiserEvent(eventId, session, page);

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h2 className="my-4 font-semibold text-2xl">Attendees</h2>
        <DownloadAttendeesPDF eventId={eventId} session={session} />
      </div>
      <Table>
        {/* <TableCaption>Page 1 of Attendees</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>No_Tickets</TableHead>
            <TableHead>Ticket Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Admitted</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.data?.data?.map((e: any) => (
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
      <DashboardPaginate
        // setPage={handlePageChange}
        numPage={events?.page}
        totalPages={events?.number_of_pages}
      />
    </>
  );
}
