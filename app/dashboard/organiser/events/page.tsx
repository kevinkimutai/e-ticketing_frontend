import { EventsTable } from "@/components/Dashboard/Tables/EventsTable";
import Header from "@/components/Header/Header";
import OrganiserSidebar from "@/components/Sidebar/OrganiserSidebar";
import Sidebar from "@/components/Sidebar/OrganiserSidebar";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { fetchOrganisersUser } from "@/utils/fetch/fetchEvents";
import { formatNumber } from "@/utils/formatCash/formatCash";
import { formatDate } from "@/utils/formatDate/formatDate";
import { getSession } from "@auth0/nextjs-auth0";
import {
  Banknote,
  ChartNoAxesCombined,
  Contact,
  Headset,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await getSessionUser();
  const organiser = await fetchOrganisersUser(session);

  // @ts-ignore
  const { user } = await getSession();

  console.log(organiser);
  return (
    <main className="flex w-full relative">
      {/* SIDEBAR */}
      <aside
        className="
      w-[15%] h-screen fixed bottom-0 left-0 top-0 bg-yellow-200 hidden md:block"
      >
        <div className="py-2 mb-6 flex justify-center items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={150}
              height={50}
              alt={"logo"}
              // className="w-[120px]"
            />
          </Link>
        </div>
        <ul className="">
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
      </aside>

      {/*  */}
      <section className="md:ml-[15%] min-h-screen w-full md:w-[85%] px-2 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            <span className="font-bold text-cyan-700 mr-2">Hi!</span>
            <span className="font-semibold capitalize">{user?.name}</span>
          </h1>
          <OrganiserSidebar />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-start items-center my-4 gap-2 md:gap-4 mb-4">
          <div className="flex flex-col justify-center p-4 border bg-cyan-700 border-slate-200 rounded-2xl cursor-pointer ">
            <p className="font-bold text-right text-lg mb-4 text-white">
              Events
            </p>
            <div className="flex justify-between items-end">
              <PartyPopper size={60} className="text-yellow-200" />
              <p className="text-white text-xl font-semibold">
                {organiser?.total}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 border bg-cyan-700 border-slate-200 rounded-2xl cursor-pointer ">
            <p className="font-bold text-right text-lg mb-4 text-white">
              Sales
            </p>
            <div className="flex justify-between items-end">
              <Banknote size={60} className="text-yellow-200" />
              <p className="text-white text-xl font-semibold">
                {formatNumber(organiser?.data?.total_amount_events)}
              </p>
            </div>
          </div>
        </div>

        {/* <h2 className="text-lg font-semibold my-8">Events</h2> */}
        <EventsTable organiser={organiser?.data} />
      </section>
    </main>
  );
};

export default page;
