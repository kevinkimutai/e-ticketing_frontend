"use client";

import React, { useEffect, useState } from "react";
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
import APP_URL from "@/constants";
import { Event, Locations } from "@/types";
import { useRouter } from "next/navigation";

type ComponentProps = {
  session: string | undefined;
};

const EventLocation = ({ session }: ComponentProps) => {
  const router = useRouter();
  const [locations, setLocations] = useState<Locations>([]);
  const [location, setLocation] = useState<Number | undefined>(
    locations[4]?.location_id
  );
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState<Number>(1);

  const fetchLocations = async () => {
    try {
      const res = await fetch(`${APP_URL}/api/v1/location`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        setLocations(data);
      } else {
        const data = await res.json();

        if (data.message == "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch(
        `${APP_URL}/api/v1/event?location_id=${location}&limit=8&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
        }
      );

      if (res.ok) {
        const { data } = await res.json();
        setEvents(data);
      } else {
        const data = await res.json();

        if (data.message == "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    fetchLocations();
    fetchEvents();
  }, [location, page]);

  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-12 py-6 bg-stone-200">
      <div className="flex justify-between items-center ">
        <h2 className="flex font-bold text-2xl ">
          New Events In{" "}
          <span className="ml-4">
            <Select
              onValueChange={(val) => {
                setLocation(+val);
                setPage(1);
              }}
              //defaultValue={"Nairobi"}
            >
              <SelectTrigger className="w-[100px] md:w-[180px] bg-yellow-200">
                <SelectValue placeholder="All" className="text-yellow-200 " />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem
                    key={loc.location_id.toString()}
                    value={loc.location_id.toString()}
                  >
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </span>
        </h2>
        <Button
          variant={"outline"}
          onClick={() => setPage((prevState) => +prevState + 1)}
        >
          View More
        </Button>
      </div>

      {/* Events*/}
      <div className="flex justify-center items-center py-6">
        <Events events={events} />
      </div>
    </div>
  );
};

export default EventLocation;
