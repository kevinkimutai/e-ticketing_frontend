import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import APP_URL from "@/constants";
import { useRouter } from "next/navigation";

type ComponentProps = {
  session: string | undefined;
  eventId: Number;
};

const TicketTypeInput = ({ session, eventId }: ComponentProps) => {
  const [tprice, setTprice] = useState<any>();
  const [ttickets, setTtickets] = useState<any>();
  const [tname, setTname] = useState<any>();

  const router = useRouter();

  const submitHandler = async () => {
    if (!tname || !tprice || !ttickets) {
      return;
    }

    let formData = {
      name: tname,
      price: +tprice,
      total_tickets: +ttickets,
    };

    console.log(JSON.stringify(formData));

    try {
      const res = await fetch(
        `${APP_URL}/api/v1/event/${eventId}/ticket-types`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        router.refresh();
      } else {
        console.log(await res.json());
        throw new Error("failed ");
      }

      const { data } = await res.json();

      return data;
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 px-4 py-2">
        <div className="grid flex-1 gap-2 mb-4">
          <Label htmlFor="name">Ticket Type</Label>
          <Select onValueChange={(val: string) => setTname(val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ticket-type name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="VVIP">VVIP</SelectItem>
              <SelectItem value="VIP">VIP</SelectItem>
              <SelectItem value="Regular">Regular</SelectItem>
              <SelectItem value="Early Bird">Early Bird</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid flex-1 gap-2 mb-4">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            onChange={(e) => setTprice(e.target.value)}
          />
        </div>

        <div className="grid flex-1 gap-2">
          <Label htmlFor="totaltickets">Total Tickets</Label>
          <Input
            id="totaltickets"
            type="number"
            onChange={(e) => setTtickets(e.target.value)}
          />
        </div>
      </div>

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={submitHandler}>Create</Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default TicketTypeInput;
