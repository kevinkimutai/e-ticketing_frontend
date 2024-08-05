"use client";

import React, { useState } from "react";
import { Search } from "../Search/Search";
import EventLocation from "../EventLocation/EventLocation";
import Categories from "../Categories/Categories";

type ComponentProps = {
  session: string | undefined;
};

const MainSection = ({ session }: ComponentProps) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  return (
    <>
      {/* Search */}
      <div className="flex justify-center items-center px-12 ">
        <Search />
      </div>
      {/* Event Location */}
      <EventLocation session={session} />
      {/* Categories */}
      <Categories />
    </>
  );
};

export default MainSection;
