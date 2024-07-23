import Banner from "@/components/Banner/Banner";
import EventLocation from "@/components/EventLocation/EventLocation";
import Events from "@/components/Events/Events";
import Header from "@/components/Header/Header";
import { Search } from "@/components/Search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-2">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Search */}
      <div className="flex justify-center items-center px-12 ">
        <Search />
      </div>
      {/* Event Location */}
      <EventLocation />
    </main>
  );
}
