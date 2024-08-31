"use client";

import React, { Component, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Download,
  Calendar,
  User,
  Tag,
  SquareUserRound,
  PartyPopper,
  PersonStanding,
  TypeIcon,
  Check,
  TriangleAlert,
  Cctv,
  EarthLock,
} from "lucide-react";
import { formatDate } from "@/utils/formatDate/formatDate";
import { useRouter } from "next/navigation";
import APP_URL from "@/constants";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

type ComponentProps = {
  ticketOrder: {
    order_id: number;
    full_name: string;
    quantity: number;
    ticket_type_name: string;
    event_name: string;
    event_date: Date;
    event_location: string;
    admitted: boolean;
  };
  session: string | undefined;
};

const AdmitAttendeeCard = ({ ticketOrder, session }: ComponentProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const admitAttendee = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${APP_URL}/api/v1/usher/order/${ticketOrder.order_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify({
            order_id: ticketOrder.order_id,
          }),
        }
      );

      if (res.ok) {
        toast.success("Attendee Successfully admitted", {
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
        router.push("/dashboard/usher/tickets");
      } else {
        const data = await res.json();

        if (data.status_code == 401) {
          toast.error(`${data.message}`, {
            position: "top-right",
          });
          router.push("/api/auth/logout");
        }

        if (data.message == "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error admitting attendee:", error);
    }
  };

  return (
    <Card className="w-full md:w-1/2  bg-white shadow-xl p-2 md:p-8 mt-12">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Event Admission Ticket
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center mb-8">
          <EarthLock size={60} className="text-cyan-700" />
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {/*Name  */}
            <div className="flex flex-col items-start space-y-2 rounded-lg bg-cyan-50 p-2">
              <SquareUserRound className="w-5 h-5 text-cyan-700" />
              <span className="text-sm text-gray-600 font-bold">
                {ticketOrder.full_name}
              </span>
            </div>

            {/*Event  */}
            <div className="flex flex-col items-start space-y-2 rounded-lg bg-cyan-50 p-2">
              <PartyPopper className="w-5 h-5 text-cyan-700" />
              <span className="text-sm text-gray-600 font-bold">
                {ticketOrder.event_name}
              </span>
            </div>

            {/* Date */}
            <div className="flex flex-col items-start space-y-2 rounded-lg bg-cyan-50 p-2">
              <Calendar className="w-5 h-5 text-cyan-700" />
              <span className="text-sm text-gray-600 font-bold">
                {formatDate(ticketOrder.event_date.toString())}
              </span>
            </div>

            {/*Quantity  */}
            <div className="flex flex-col items-start space-y-2 rounded-lg bg-cyan-50 p-2">
              <PersonStanding className="w-5 h-5 text-cyan-700" />
              <span className="text-sm text-gray-600 font-bold">
                Quantity: {ticketOrder.quantity}
              </span>
            </div>

            {/*TicketType  */}
            <div className="flex flex-col items-start space-y-2 rounded-lg bg-cyan-50 p-2">
              <TypeIcon className="w-5 h-5 text-cyan-700" />
              <span className="text-sm text-gray-600 font-bold">
                {ticketOrder.ticket_type_name}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>Ticket #: {ticketOrder.order_id}</p>
          <p>Venue: {ticketOrder.event_location}</p>
        </div>
      </CardContent>
      {ticketOrder.admitted ? (
        <div className="flex justify-center items-center bg-red-100 rounded-lg p-2">
          <p className="flex justify-center items-center text-red-600 font-bold">
            <span>
              <TriangleAlert size={20} className="mr-2" />
            </span>
            Ticket Admitted
          </p>
        </div>
      ) : (
        <CardFooter className="flex justify-center">
          <Button className="w-full" onClick={admitAttendee} disabled={loading}>
            {loading ? <ClipLoader color="#ffff" size={15} /> : "ADMIT"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AdmitAttendeeCard;
