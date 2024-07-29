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

export function AttendeesTable() {
  return (
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell className="font-semibold">{invoice.fullname}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.nums_tickets}</TableCell>
            <TableCell>{invoice.ttype}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">Kshs 2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
