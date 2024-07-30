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
    payment_id: "A00f326sdg",
    tickets: 3,
    amount: 3000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    payment_id: "A00f326sdg",
    tickets: 3,
    amount: 3000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    payment_id: "A00f326sdg",
    tickets: 3,
    amount: 3000,
  },
  {
    id: "001",
    name: "summertides",
    date: "12-04-2026",
    payment_id: "A00f326sdg",
    tickets: 3,
    amount: 3000,
  },
];

export function EventsAttendeeTable() {
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell className="font-semibold">{invoice.name}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.payment_id}</TableCell>
            <TableCell>{invoice.tickets}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">Kshs 9000.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
