"use client";

import React from "react";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Marker,
} from "@vis.gl/react-google-maps";

type ComponentProps = {
  latitude: number;
  longitude: number;
};

const EventMap = ({ latitude, longitude }: ComponentProps) => {
  return (
    <div className="rounded-2xl overflow-hidden h-[300px] mb-4">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        {/* <MapComponent /> */}
        {/* <MapContainer onClick={handleMapClick}> */}
        <Map
          defaultZoom={13}
          mapId={"ea839b518fdbe830"}
          defaultCenter={{ lat: latitude, lng: longitude }}
          // onClick={handleMapClick}
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
            position={{ lat: latitude, lng: longitude }} // Set marker position
            // Add any additional AdvancedMarker properties here
          />
        </Map>
        {/* </MapContainer> */}
      </APIProvider>
    </div>
  );
};

export default EventMap;
