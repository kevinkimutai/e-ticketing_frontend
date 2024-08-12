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
import { TicketTypeModal } from "../Modal/TicketTypeModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ComponentProps = {
  ttypes: any;
  session: string | undefined;
  eventId: number;
};

const TicketType = ({ ttypes, session, eventId }: ComponentProps) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Event Ticket Types</AccordionTrigger>
          <AccordionContent>
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
                    {ttypes?.map((ttype: any) => (
                      <TableRow key={ttype.ticket_type_id}>
                        {/* <TableCell>{ttype.id}</TableCell> */}
                        <TableCell className="font-semibold">
                          {ttype.name}
                        </TableCell>
                        <TableCell>{ttype.price}.00</TableCell>
                        <TableCell>{ttype.remaining_tickets}</TableCell>
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
                <div className="flex justify-end">
                  <TicketTypeModal session={session} eventId={eventId} />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default TicketType;
