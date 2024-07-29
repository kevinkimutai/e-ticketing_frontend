import { AlertEvent } from "@/components/Alert/AlertEvent";
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="px-24 py-4">
      <AlertEvent />
      <section className="my-4">
        <div className="w-1/2">
          <div className="flex align-center justify-between mb-4">
            <h1 className="font-bold text-2xl">Summertides Diani</h1>
            <div className="text-sm">12th July 2024</div>
          </div>
          <div className="flex flex-col justify-center items-center p-4 border border-slate-200 rounded-2xl">
            <p className="mb-4">You havent added your ticket types</p>
            <Button>Add Ticket-Type</Button>
          </div>
        </div>
      </section>

      {/* CARDS INFO */}
      <section className="flex justify-start items-center my-4">
        <div className="flex flex-col justify-center m-4 p-4 border border-slate-200 rounded-2xl w-1/4">
          <p className="font-bold text-right text-xl mb-4">VVIP</p>
          <div className="flex justify-between items-end">
            <Contact size={70} className="text-cyan-700" />
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
    </main>
  );
};

export default page;
