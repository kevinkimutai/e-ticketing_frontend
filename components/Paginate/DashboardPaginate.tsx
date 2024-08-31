"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import qs from "query-string";

type ComponentProps = {
  // setPage: (pageNumber: number) => void;
  numPage: number;
  totalPages: number;
};

const DashboardPaginate = ({ numPage, totalPages }: ComponentProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const queryHandler = (pageNumber: number) => {
    const updatedQuery = {
      ...currentQuery,
      page: pageNumber,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
    setPage(pageNumber); // Update the state if needed
  };

  // const handlePageChange = (newPage: number) => {
  //   queryHandler(newPage);
  // };

  const getPageNumbers = () => {
    const pages = [];
    const maxPages = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPages) {
      startPage = Math.max(1, numPage - Math.floor(maxPages / 2));
      endPage = startPage + maxPages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPages + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center py-4">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          {numPage > 1 && (
            <li>
              <button
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => queryHandler(numPage - 1)}
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          )}
          {getPageNumbers().map((page) => (
            <li key={page}>
              <button
                className={`px-3 py-2 leading-tight ${
                  numPage === page
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-500 bg-white"
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => queryHandler(page)}
              >
                {page}
              </button>
            </li>
          ))}
          {numPage < totalPages && (
            <li>
              <button
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={() => queryHandler(numPage + 1)}
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default DashboardPaginate;
