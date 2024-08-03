import { EventsAttendeeTable } from "@/components/Dashboard/Tables/EventsAttendeeTable";
import { EventsTable } from "@/components/Dashboard/Tables/EventsTable";
import AttendeeSidebar from "@/components/Sidebar/AttendeeSideBar";
import Sidebar from "@/components/Sidebar/OrganiserSidebar";
import {
  ChartNoAxesCombined,
  Contact,
  Headset,
  PartyPopper,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main className="flex w-full">
      <aside
        className="2
      w-1/5 h-screen absolute bg-cyan-700 hidden md:block"
      >
        <ul className="mt-[60%]">
          <li className="py-2 flex items-center text-cyan-700 pl-6 cursor-pointer bg-white w-full">
            <PartyPopper className="mr-2" /> Events
          </li>
          <li className="py-2 flex items-center text-yellow-200 pl-6 cursor-pointer w-full">
            <ChartNoAxesCombined className="mr-2" /> Payments
          </li>
          <li className="py-2 flex items-center text-yellow-200 pl-6 cursor-pointer w-full">
            <Headset className="mr-2" />
            Support
          </li>
        </ul>
      </aside>
      <section className="md:ml-[20%] min-h-screen w-full md:w-4/5 px-2 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            <span className="font-bold text-yellow-700 mr-2">Hi!</span>
            <span className="font-semibold">Kevin Kimutai</span>
          </h1>
          <AttendeeSidebar />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-start items-center my-4 gap-2 md:gap-4 mb-4">
          <div className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer shadow">
            <p className="font-bold text-right text-lg mb-4 text-cyan-700">
              Events
            </p>
            <div className="flex justify-between items-end">
              <PartyPopper size={60} className="text-cyan-700" />
              <p className="text-xl font-semibold">2</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold my-8">Events</h2>
        <EventsAttendeeTable />
      </section>
    </main>
  );
};

export default page;
