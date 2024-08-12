"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Blocks, Check, Pin, School, TriangleAlert } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Event, Location, TicketOrderItems } from "@/types";
import { toast, Toaster } from "react-hot-toast";
import APP_URL from "@/constants";
import { ClipLoader } from "react-spinners";
import { formatDate } from "@/utils/formatDate/formatDate";

type ComponentProps = {
  event: Event;
  location: Location;
  ttypes: any;
  session: string | undefined;
};

const EventDetails = ({ event, location, ttypes, session }: ComponentProps) => {
  const [eventCart, setEventCart] = useState<TicketOrderItems[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const cartHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    ticketTypeId: number,
    itemPrice: number,
    remainingTickets: number
  ) => {
    const qty = +e.target.value;

    if (qty > remainingTickets) {
      return toast.error(`${remainingTickets} remaining tickets. Try again!`, {
        icon: <TriangleAlert />,
        position: "top-right",
        style: {
          border: "1px solid #750000",
          padding: "16px",
          color: "#FFF3D9",
          backgroundColor: "#A30000",
        },
      });
    }

    setEventCart((prevState) => {
      const existingItemIndex = prevState?.findIndex(
        (item) => item.ticket_type_id === ticketTypeId
      );
      if (existingItemIndex! > -1) {
        const updatedCart = [...prevState];
        updatedCart[existingItemIndex].quantity = qty;
        return updatedCart;
      } else {
        return [
          ...prevState,
          { ticket_type_id: ticketTypeId, quantity: qty, price: itemPrice },
        ];
      }
    });
  };

  const submitHandler = async () => {
    setLoading(true);
    const cart = { order_items: eventCart };
    console.log(cart);

    try {
      const res = await fetch(`${APP_URL}/api/v1/ticket-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
        body: JSON.stringify(cart),
      });

      if (res.ok) {
        toast.success("order confirmed. Check email for ticket", {
          icon: <Check />,
          position: "top-right",
          style: {
            border: "1px solid #750000",
            padding: "16px",
            color: "#FFF3D9",
            backgroundColor: "#18A558",
          },
        });
        setLoading(false);
      } else {
        setLoading(false);
        console.log(await res.json());
        throw new Error("failed ");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  useEffect(() => {
    const newTotalPrice = eventCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [eventCart]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-start md:items-start">
        <div className="w-[300px] rounded-md">
          <Image
            src={event.poster_url}
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
              <h1 className="text-2xl font-bold">{event.name}</h1>
            </div>
            <p className="text-slate-500 mb-4">
              {formatDate(event.date.toString())}
            </p>
            <ul className="mb-6">
              <li className="flex items-center p-2">
                <Pin size={20} className="mr-2 text-red-400" />
                <span className="font-semibold mr-6">Venue</span>
                {event.location}
              </li>
              <li className="flex items-center p-2">
                <School size={20} className="mr-2 text-blue-400" />
                <span className="font-semibold mr-6">Town</span>
                {location.name}
              </li>
              <li className="flex items-center p-2">
                <Blocks size={20} className="mr-2 text-yellow-400" />
                <span className="font-semibold mr-6">Category</span>
                Concert
              </li>
            </ul>
            <p className="text-gray-600">{event.description}</p>
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
                  {ttypes?.map((item: any) => (
                    <div
                      key={item.ticket_type_id}
                      className="grid grid-cols-[100px_1fr_auto] items-center gap-4"
                    >
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="grid gap-1">
                        <p className="text-muted-foreground">
                          Kshs {item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 p-1">
                        <Input
                          type="number"
                          className="w-16"
                          onChange={(e) =>
                            cartHandler(
                              e,
                              item.ticket_type_id,
                              item.price,
                              item.remaining_tickets
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="border-t">
                <div className="flex items-center justify-between mt-6">
                  <p className="text-lg font-semibold">Total:</p>
                  <p className="text-lg font-semibold">{totalPrice}.00</p>
                </div>
                <div className="flex justify-end mt-4">
                  {/* <Button variant="outline" className="flex-1">
                  Continue
                </Button> */}
                  <Button
                    className="flex-1"
                    onClick={submitHandler}
                    disabled={loading}
                  >
                    {loading ? (
                      <ClipLoader color="#ffff" size={15} />
                    ) : (
                      "Proceed to Checkout"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
