"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Blocks, Pin, School } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";

const cart = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "VVIP",
    price: 4000,
    quantity: 1,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "VIP",
    price: 2000,
    quantity: 2,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Regular",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Regular",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Regular",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Regular",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Regular",
    price: 1000,
    quantity: 1,
  },
];

const EventDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start md:items-start">
      <div className="w-[300px] rounded-md">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/ticket-pass-9cce1.appspot.com/o/rent-images%2Feventposters2.jpg?alt=media&token=f5fc577c-b858-4999-8a2b-48de9ca8a01c"
          }
          alt={"poster"}
          width={400}
          height={400}
          className="w-full object-contain"
        />
      </div>
      {/* ////////////////// */}
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" w-full lg:w-3/5 py-4  px-6">
          <div className="flex justify-end">
            <h1 className="text-2xl font-bold">Telluride</h1>
          </div>
          <p className="text-slate-500 mb-4">14th-date-2024</p>
          <ul className="mb-6">
            <li className="flex items-center p-2">
              <Pin size={20} className="mr-2 text-red-400" />
              <span className="font-semibold mr-6">Venue</span>
              alejandro rd
            </li>
            <li className="flex items-center p-2">
              <School size={20} className="mr-2 text-blue-400" />
              <span className="font-semibold mr-6">Town</span>
              Nairobi
            </li>
            <li className="flex items-center p-2">
              <Blocks size={20} className="mr-2 text-yellow-400" />
              <span className="font-semibold mr-6">Category</span>
              Concert
            </li>
          </ul>
          <p className="text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Etiam at risus et justo dignissim congue. Donec
            congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc
            euismod nec tortor nec blandit. Quisque pretium malesuada lacus,
            eget lacinia eros vehicula non. Suspendisse potenti. In hac
            habitasse platea dictumst. Nulla facilisi. Sed porttitor libero ac
            turpis molestie, et egestas nisi porta. Sed nec fe"
          </p>
        </div>
        <div className="w-full lg:w-[450px] px-6 py-4">
          <div className="bg-yellow-200 rounded-2xl w-full h-fit shadow p-2 md:p-4">
            <h2 className="text-center font-semibold mb-6">Tickets</h2>
            {/* <ul className="flex flex-col justify-center items-center">
                <li className="w-full p-2 bg-slate-50 rounded-lg text-center">
                  VVIP
                </li>
                <li>VIP</li>
                <li>Regular</li>
              </ul> */}
            <p className="mb-4">
              Please choose your ticket type before proceeding.
            </p>

            <ScrollArea className="h-[300px] w-full bg-white p-4 rounded-md">
              <div className="grid gap-2 md:gap-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[100px_1fr_auto] items-center gap-4"
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="grid gap-1">
                      <p className="text-muted-foreground">
                        Kshs {item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 p-1">
                      <Input type="number" className="w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t">
              <div className="flex items-center justify-between mt-6">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold">4000.00</p>
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" className="flex-1">
                  Continue
                </Button>
                <Button className="flex-1">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
