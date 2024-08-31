"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { DatePickerDemo } from "../Inputs/Events/DateComponent";
import { EditDatePicker } from "../Inputs/Events/EditDatePicker";
import APP_URL, { categoryIcons } from "@/constants";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Marker,
} from "@vis.gl/react-google-maps";
import toast from "react-hot-toast";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

type ComponentProps = {
  event: {
    event_id: string;
    name: string;
    date: Date;
    location: string;
    location_id: number;
    description: string;
    category_id: number;
    latitude: number;
    longitude: number;
  };
  locations: any[];
  session: string | undefined;
};
const EditEventForm = ({ event, locations, session }: ComponentProps) => {
  const [formData, setFormData] = useState({
    name: event.name,
    date: event.date,
    location: event.location,
    description: event.description,
    category_id: +event.category_id,
    location_id: event.location_id,
    longitude: event.longitude,
    latitude: event.latitude,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [markerPosition, setMarkerPosition] = useState<any>({
    lat: event.latitude,
    lng: event.longitude,
  });

  const handleMapClick = (event: any) => {
    console.log(markerPosition);

    const clickedLatLng = event.detail.latLng;

    setMarkerPosition(clickedLatLng);
    setFormData({
      ...formData,
      longitude: clickedLatLng.lng,
      latitude: clickedLatLng.lat,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDateChange = (value: Date) => {
    setFormData({
      ...formData,
      date: value,
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("FOEMDATA", formData);

    try {
      setLoading(true);
      const response = await fetch(
        `${APP_URL}/api/v1/event/${event.event_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("successfully updated event", {
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
        router.push(`/dashboard/organiser/events/${event.event_id}`);
      } else {
        const data = await response.json();
        console.log("API Response:", data); // Log the full API response

        if (data.message === "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        } else {
          toast.error(`Error: ${data.message || "Failed to admit attendee."}`, {
            position: "top-right",
          });
        }
        setLoading(false); // Ensure loading state is turned off
      }
    } catch (error) {
      console.error("Error admitting attendee:", error);
      toast.error("An error occurred while admitting attendee.", {
        position: "top-right",
      });
      setLoading(false); // Ensure loading state is turned off
    }
  };

  return (
    <Card className="w-full md:w-1/2 mt-10 shadow-xl p-4">
      <CardHeader>
        <CardTitle>Edit Event</CardTitle>
        <CardDescription>Edit Your Event</CardDescription>
      </CardHeader>
      <ScrollArea className="w-full h-[60vh] border py-4">
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-4 w-full">
              <div className="grid gap-2 w-full">
                <Label htmlFor="title">Event Name</Label>
                <Input
                  id="title"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter event title"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter event location"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="category">Event Town</Label>

                <Select
                  //   @ts-ignore
                  id="location_id"
                  value={formData.location_id.toString()}
                  onValueChange={(value) =>
                    handleSelectChange("location_id", value)
                  }
                >
                  <SelectTrigger>
                    {locations.find(
                      (loc: any) => loc.location_id === formData.location_id
                    )?.name || "Select town"}
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc: any) => (
                      <SelectItem key={loc.location_id} value={loc.id}>
                        {loc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="location">Date</Label>

                {/* @ts-ignore */}
                <EditDatePicker
                  date={formData.date}
                  setDate={handleDateChange}
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your event"
                />
              </div>
            </div>
            <div className="grid gap-2 w-full">
              <Label htmlFor="category">Event Category</Label>

              <Select
                //   @ts-ignore
                id="category"
                value={formData.category_id.toString()}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  {categoryIcons.find(
                    (cat: any) => cat.id === formData.category_id
                  )?.label || "Select category"}
                </SelectTrigger>
                <SelectContent>
                  {categoryIcons.map((cat: any) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2 w-full">
              <Label htmlFor="map">Event Location Map</Label>
              <div className="flex items-center px-4 py-2 w-full h-[400px]">
                <APIProvider
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
                  onLoad={() => console.log("Maps API has loaded.")}
                >
                  {/* <MapComponent /> */}
                  {/* <MapContainer onClick={handleMapClick}> */}
                  <Map
                    defaultZoom={13}
                    mapId={"ea839b518fdbe830"}
                    defaultCenter={{ lat: -1.293177, lng: 36.818877 }}
                    onClick={handleMapClick}
                    onCameraChanged={(ev: MapCameraChangedEvent) =>
                      console.log(
                        "camera changed:",
                        ev.detail.center,
                        "zoom:",
                        ev.detail.zoom
                      )
                    }
                  >
                    <Marker
                      position={markerPosition} // Set marker position
                      // Add any additional AdvancedMarker properties here
                    />
                  </Map>
                  {/* </MapContainer> */}
                </APIProvider>
              </div>
            </div>
          </form>
        </CardContent>
      </ScrollArea>
      <CardFooter className="py-4">
        <div className="flex w-full justify-center items-center ">
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? <ClipLoader color="#ffff" size={15} /> : "Edit Event"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EditEventForm;
