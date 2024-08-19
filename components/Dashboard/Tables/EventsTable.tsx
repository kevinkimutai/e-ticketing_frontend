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

import OrganiserEventTable from "@/components/Tables/OrganiserEventTable";

type ComponentProps = {
  organiser: any;
};

export function EventsTable({ organiser }: ComponentProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="my-4 font-semibold text-xl">Events</h2>
        {/* <Button>Download PDF</Button> */}
        {/* <DownloadEventsPDF /> */}
      </div>
      <Table>
        <TableCaption>page 1 of your events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Tickets_Sold</TableHead>
            <TableHead>Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organiser?.data?.map((org: any) => (
            <OrganiserEventTable organiser={org} key={org?.organiser_id} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {organiser.total_amount_events}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
