import { AlertEvent } from "@/components/Alert/AlertEvent";
import { AttendeesTable } from "@/components/Dashboard/Tables/AttendeesTable";
import { TicketTypeModal } from "@/components/Modal/TicketTypeModal";

import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="px-3 sm:px-6 md:px-12 lg:px-24 py-2 sm:py-4">
      <AlertEvent />
      <section className="flex flex-col sm:flex-row items-center gap-4 my-4">
        <div className="w-full sm:w-3/4 md:w-1/2">
          <div className="flex align-center justify-between mb-4">
            <h1 className="font-bold text-3xl">Summertides Diani</h1>
            <div className="text-sm font-semibold">12th July 2024</div>
          </div>
        </div>
        <div className="w-3/4 sm:w-1/2">
          <div className="flex flex-col justify-center items-center p-4 border border-gray-300 rounded-2xl">
            <p className="mb-4">You havent added your ticket types</p>
            <TicketTypeModal />
          </div>
        </div>
      </section>

      {/* CARDS INFO */}
      <section className="grid grid-cols-2 md:grid-cols-4 justify-start items-center my-4 gap-2 md:gap-4 mb-4">
        <div className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer ">
          <p className="font-bold text-right text-lg mb-4">VVIP</p>
          <div className="flex justify-between items-end">
            <Contact size={60} className="text-cyan-700" />
            <p>
              <span className="font-semibold text-lg text-cyan-700 mr-2">
                400
              </span>
              <span className="font-bold text-xl">/500</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer ">
          <p className="font-bold text-right text-lg mb-4">VVIP</p>
          <div className="flex justify-between items-end">
            <Contact size={60} className="text-cyan-700" />
            <p>
              <span className="font-semibold text-lg text-cyan-700 mr-2">
                400
              </span>
              <span className="font-bold text-xl">/500</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer ">
          <p className="font-bold text-right text-lg mb-4">VVIP</p>
          <div className="flex justify-between items-end">
            <Contact size={60} className="text-cyan-700" />
            <p>
              <span className="font-semibold text-lg text-cyan-700 mr-2">
                400
              </span>
              <span className="font-bold text-xl">/500</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer ">
          <p className="font-bold text-right text-lg mb-4">VVIP</p>
          <div className="flex justify-between items-end">
            <Contact size={60} className="text-cyan-700" />
            <p>
              <span className="font-semibold text-lg text-cyan-700 mr-2">
                400
              </span>
              <span className="font-bold text-xl">/500</span>
            </p>
          </div>
        </div>
      </section>

      {/* CHARTS INFO */}

      {/* TABLE */}
      <h2 className="my-4 font-semibold text-xl">Attendees</h2>
      <AttendeesTable />
    </main>
  );
};

export default page;
