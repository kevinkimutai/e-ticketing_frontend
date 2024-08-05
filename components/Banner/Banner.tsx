"use client";

import Image from "next/image";
import React from "react";

import { EventModal } from "../Modal/EventModal";

const Banner = ({ session }: any) => {
  // const { isOpen, onClose, onOpen } = useEventModal();

  return (
    <>
      <div className="px-2 sm:px-4 md:px-6 lg:px-12">
        <div className="flex flex-col justify-center items-center bg-yellow-400 h-screen  md:h-[50vh] w-full rounded-lg relative overflow-hidden">
          <Image
            src={
              "https://images.unsplash.com/photo-1695048980897-6093a651e5cc?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // "https://images.unsplash.com/photo-1622098152051-fcb9904099a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="banner"
            height={400}
            width={400}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
          <h1 className="text-4xl font-bold text-white mb-2 z-10">
            Join The Fun
          </h1>
          <p className="font-semibold text-white mb-8 z-10">
            Secure Your Ticket Today
          </p>
          <div className="flex z-10 gap-4">
            {/* <Button variant={"outline"}>Book Event</Button> */}
            {/* <Button onClick={onOpen}>Ticket Your Event</Button> */}
            <EventModal session={session} />
          </div>
        </div>
      </div>
      {/* Create Event Modal
      {isOpen && <EventModal />} */}
    </>
  );
};

export default Banner;
