"use client";

import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import EventLocation from "../EventLocation/EventLocation";

import CategoriesSection from "../Categories/Categories";
import { useRouter } from "next/navigation";
import { Event } from "@/types";
import APP_URL from "@/constants";
import Events from "../Events/Events";

type ComponentProps = {
  session: string | undefined;
};

const MainSection = ({ session }: ComponentProps) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${APP_URL}/api/v1/event?search=${searchTerm}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        // setEvents(data);
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
    fetchEvents();
  }, [searchTerm]);

  return (
    <>
      {/* Search */}
      <div className="flex justify-center items-center px-12 ">
        <Search setSearchTerm={setSearchTerm} />
      </div>

      {!searchTerm && (
        <>
          {/* Event Location */}
          <EventLocation session={session} />
          {/* Categories */}
          <CategoriesSection session={session} />
        </>
      )}

      {searchTerm && events.length == 0 && (
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center text-center rounded-2xl border border-black======= h-[150px] mb-4 w-1/2">
            <p className="font-semibold">No such events.Try another search</p>
          </div>
        </div>
      )}
      {searchTerm && events.length > 0 && <Events events={events} />}
    </>
  );
};

export default MainSection;
