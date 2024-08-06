"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Event, Locations } from "@/types";
import APP_URL, { categoryIcons } from "@/constants";
import Events from "../Events/Events";

const IconComponent = ({ Icon, selected }: any) => (
  <Icon
    className={`text-2xl mb-4 ${
      selected ? "text-black font-semibold" : "text-slate-800"
    }`}
  />
);

type ComponentProps = {
  session: string | undefined;
};

const Categories = ({ session }: ComponentProps) => {
  const [selectedLabel, setSelectedLabel] = useState<Number | undefined>(1);
  const [events, setEvents] = useState<Event[] | undefined>();
  const [page, setPage] = useState<Number>(1);
  const router = useRouter();

  const labelHandler = (label: number) => {
    setSelectedLabel(label);
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch(
        `${APP_URL}/api/v1/event?category_id=${selectedLabel}&limit=8&page=${page}`,
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
    fetchEvents();
  }, [selectedLabel, page]);

  return (
    <div className="py-6 px-2 sm:px-4 md:px-6 lg:px-12">
      <h2 className="flex items-center font-bold text-2xl ">
        Explore By{" "}
        <span className="ml-4 bg-yellow-200 px-4 py-2 text-lg rounded-md">
          Categories
        </span>
      </h2>

      <div className="py-4 overflow-x-scroll no-scrollbar flex justify-start gap-2 md:gap-4 lg:gap-6 ">
        {/*@ts-ignore */}
        {categoryIcons.map(({ id, icon: Icon, label }) => (
          <div
            key={id}
            className={`flex flex-col justify-center border border-yellow-400 rounded-lg p-4 items-center cursor-pointer transition-all ${
              id === selectedLabel ? "bg-yellow-200 scale-105" : ""
            }`}
            onClick={() => {
              labelHandler(id);
            }}
          >
            <IconComponent Icon={Icon} selected={id === selectedLabel} />
            <p className="text-slate-800 text-sm whitespace-nowrap pb-2 capitalize transition-all">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="flex justify-center items-center py-6">
        <Events events={events} />
      </div>

      {/* Pagination */}
    </div>
  );
};
export default Categories;
