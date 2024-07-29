"use client";

import React, { useState } from "react";

import { DialogClose, DialogFooter } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Marker,
} from "@vis.gl/react-google-maps";

const EventInputMap = () => {
  const [markerPosition, setMarkerPosition] = useState<any | null>(null);

  const handleMapClick = (event: any) => {
    const clickedLatLng = event.detail.latLng;
    setMarkerPosition(clickedLatLng);
  };

  return (
    <div className="h-screen">
      <div className="flex items-center px-4 py-2 w-full h-[55%]">
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
            {markerPosition && ( // Conditionally render marker
              <Marker
                position={markerPosition} // Set marker position
                // Add any additional AdvancedMarker properties here
              />
            )}
          </Map>
          {/* </MapContainer> */}
        </APIProvider>
      </div>

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button>Next</Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default EventInputMap;
