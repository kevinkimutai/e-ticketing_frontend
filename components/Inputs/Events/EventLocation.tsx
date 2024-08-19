"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import APP_URL from "@/constants";
import { useRouter } from "next/navigation";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ComponentProps = {
  session: string | undefined;
  onBack: () => void;
  onNext: (val: any) => Promise<void>;
};

const EventInputLocation = ({ session, onBack, onNext }: ComponentProps) => {
  const [locationName, setLocationName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [locations, setLocations] = useState([]);
  const [locationID, setLocationID] = useState<number | undefined>();
  const router = useRouter();

  const fetchLocations = async () => {
    try {
      const res = await fetch(`${APP_URL}/api/v1/location`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      });

      if (res.ok) {
        const { data } = await res.json();

        setLocations(data);
      } else {
        const data = await res.json();

        if (data.message == "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center px-4 py-2">
        <ScrollArea className="h-[300px]  w-full">
          <div className="grid w-full gap-1.5 mb-4">
            <Label htmlFor="location_id">Town</Label>
            <Select onValueChange={(val: string) => setLocationID(+val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Town" />
              </SelectTrigger>
              <SelectContent>
                {locations?.map((loc: any) => (
                  <SelectItem key={loc?.location_id} value={loc?.location_id}>
                    {loc?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5 mb-4">
            <Label htmlFor="venue">Venue Address</Label>
            <Textarea
              placeholder="venue."
              id="venue"
              onChange={(e) => {
                setLocationName(e.target.value);
              }}
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="description">Brief description</Label>
            <Textarea
              placeholder="description."
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <Button type="button" variant="secondary" onClick={onBack}>
            Cancel
          </Button>

          <Button
            onClick={() => {
              if (locationName) {
                onNext({
                  location: locationName,
                  location_id: locationID,
                  description,
                });
              }
            }}
          >
            Next
          </Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default EventInputLocation;
