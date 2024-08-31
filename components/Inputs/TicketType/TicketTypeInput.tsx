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
import toast, { Toaster } from "react-hot-toast";
import { Check } from "lucide-react";
import { ClipLoader } from "react-spinners";

type ComponentProps = {
  session: string | undefined;
  eventId: Number;
};

const TicketTypeInput = ({ session, eventId }: ComponentProps) => {
  const [tprice, setTprice] = useState<any>();
  const [ttickets, setTtickets] = useState<any>();
  const [tname, setTname] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

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

    try {
      setLoading(true);
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
        toast.success("Ticket-type created successfully", {
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
        const { data } = await res.json();
        router.refresh();

        return data;
      } else {
        const data = await res.json();
        toast.error(`An error occurred:,${data.message}`, {
          position: "top-right",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(`An error occurred while creating ticket-type,${error}`, {
        position: "top-right",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="grid grid-cols-2 gap-1 md:gap-2 px-4 py-2">
        <div className="grid flex-1 gap-2 mb-4">
          <Label htmlFor="name">Ticket Type</Label>
          <Select onValueChange={(val: string) => setTname(val)}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="ticket-type name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="VVIP">VVIP</SelectItem>
              <SelectItem value="VIP">VIP</SelectItem>
              <SelectItem value="Regular">Regular</SelectItem>
              <SelectItem value="Early Bird">Early Bird</SelectItem>
              <SelectItem value="Group Of 4">Group Of 4</SelectItem>
              <SelectItem value="Couple Tickets">Couples</SelectItem>
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
          <Button onClick={submitHandler} disabled={loading}>
            {loading ? <ClipLoader color="#ffff" size={15} /> : "Create"}
          </Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default TicketTypeInput;
