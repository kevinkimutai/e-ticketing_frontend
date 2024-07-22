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

const EventLocation = () => {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center ">
        <h2 className="flex font-bold text-2xl ">
          New Events In{" "}
          <span className="ml-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" className="text-yellow-200" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Nairobi</SelectItem>
                <SelectItem value="dark">Mombasa</SelectItem>
                <SelectItem value="system">Kisumu</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </h2>
        <div className="bg-stone-300 px-4  py-2 rounded-xl">
          <Link href={"/"}>view more</Link>
        </div>
      </div>

      {/* //////// */}
      <div className="flex justify-center items-center py-6">
        <Events />
      </div>
    </div>
  );
};

export default EventLocation;
