import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChartNoAxesCombined, Headset, Menu, PartyPopper } from "lucide-react";

const OrganiserSidebar = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Ticket Pass</SheetDescription>
          </SheetHeader>
          <ul className="mt-[20%]">
            <li className="py-2 flex items-center  pl-6 cursor-pointer text-cyan-700 bg-white w-full">
              <PartyPopper className="mr-2" /> Events
            </li>
            <li className="py-2 flex items-center pl-6 cursor-pointer w-full">
              <ChartNoAxesCombined className="mr-2" /> Sales
            </li>
            <li className="py-2 flex items-center pl-6 cursor-pointer w-full">
              <Headset className="mr-2" />
              Support
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OrganiserSidebar;
