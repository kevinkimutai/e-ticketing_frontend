"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ClipLoader } from "react-spinners";

let uiItems = 8;

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#f43f5e" size={25} />
    </div>
  );
}
