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
import { Pencil, PencilIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const invoices = [
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    total_tickets_sold: 300,
    total_amount: 480000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    total_tickets_sold: 300,
    total_amount: 480000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    total_tickets_sold: 300,
    total_amount: 480000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    total_tickets_sold: 300,
    total_amount: 480000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    total_tickets_sold: 300,
    total_amount: 480000,
  },
];

export function EventsTable() {
  return (
    <Table>
      <TableCaption>page 1 of your events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Tickets_Sold</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell className="font-semibold">{invoice.name}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.total_tickets_sold}</TableCell>
            <TableCell>{invoice.total_amount}</TableCell>
            <TableCell className="text-right">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <PencilIcon size={20} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit event</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">Kshs 2,500,000.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
