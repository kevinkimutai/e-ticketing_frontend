import { Edit, Eraser } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ttypes = [
  {
    id: 1,
    type: "VVIP",
    price: 4000,
    remaining: 99,
  },
  {
    id: 2,
    type: "VIP",
    price: 4000,
    remaining: 99,
  },
  {
    id: 3,
    type: "Advanced",
    price: 4000,
    remaining: 99,
  },
  {
    id: 4,
    type: "Regular",
    price: 4000,
    remaining: 99,
  },
];

type ComponentProps = {
  ticketTypes: any;
};

const TicketType = ({ ticketTypes }: ComponentProps) => {
  return (
    <div className="w-full sm:w-3/4 mx-auto">
      <div className="p-4 border border-gray-300 rounded-2xl shadow">
        <h3 className="text-center mb-4 font-semibold">Ticket Types</h3>
        <Table>
          <TableCaption>Event Ticket Types</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Remaining</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ttypes.map((ttype) => (
              <TableRow key={ttype.id}>
                {/* <TableCell>{ttype.id}</TableCell> */}
                <TableCell className="font-semibold">{ttype.type}</TableCell>
                <TableCell>{ttype.price}.00</TableCell>
                <TableCell>{ttype.remaining}</TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Eraser size={15} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit ticket type</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default TicketType;
