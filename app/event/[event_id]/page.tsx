"use client";

import React from "react";

import Footer from "@/components/Footer/Footer";

import EventDetails from "@/components/Events/EventDetails";
import EventMap from "@/components/Events/EventMap";
import Header from "@/components/Header/Header";

const page = () => {
  return (
    <main>
      <Header />
      <section className="px-2 sm:px-4 md:px-6 lg:px-12 ">
        <EventDetails />
        <EventMap />
      </section>
      <Footer />
    </main>
  );
};

export default page;
