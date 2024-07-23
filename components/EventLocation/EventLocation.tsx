import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Events from "../Events/Events";
import { Button } from "../ui/button";

const EventLocation = () => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-12 py-6 bg-stone-200">
      <div className="flex justify-between items-center ">
        <h2 className="flex font-bold text-2xl ">
          New Events In{" "}
          <span className="ml-4">
            <Select>
              <SelectTrigger className="w-[100px] md:w-[180px] bg-yellow-200">
                <SelectValue
                  placeholder="Nairobi"
                  className="text-yellow-200 "
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Nairobi</SelectItem>
                <SelectItem value="dark">Mombasa</SelectItem>
                <SelectItem value="system">Kisumu</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </h2>
        <Button variant={"outline"}>View More</Button>
      </div>

      {/* Events*/}
      <div className="flex justify-center items-center py-6">
        <Events />
      </div>
    </div>
  );
};

export default EventLocation;
