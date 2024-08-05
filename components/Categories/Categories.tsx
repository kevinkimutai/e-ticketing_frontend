"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import qs from "query-string";
import { categoryIcons } from "@/constants";
import Events from "../Events/Events";

const IconComponent = ({ Icon, selected }: any) => (
  <Icon
    className={`text-2xl mb-4 ${
      selected ? "text-black font-semibold" : "text-slate-800"
    }`}
  />
);

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams?.get("category");

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const queryHandler = (label: string) => {
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

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
        {categoryIcons.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={`flex flex-col justify-center border border-yellow-400 rounded-lg p-4 items-center cursor-pointer transition-all ${
              label === selectedCategory ? "bg-yellow-200 scale-105" : ""
            }`}
            onClick={() => {
              queryHandler(label);
            }}
          >
            <IconComponent Icon={Icon} selected={label === selectedCategory} />
            <p className="text-slate-800 text-sm whitespace-nowrap pb-2 capitalize transition-all">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="flex justify-center items-center py-6">
        <Events />
      </div>
      <div className="flex justify-center items-center py-6">
        <Events />
      </div>

      {/* Pagination */}
    </div>
  );
};
export default Categories;
