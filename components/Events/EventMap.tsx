"use client";

import React from "react";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Marker,
} from "@vis.gl/react-google-maps";

const EventMap = () => {
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
          defaultCenter={{ lat: -1.293971, lng: 36.851253 }}
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
            position={{ lat: -1.293971, lng: 36.851253 }} // Set marker position
            // Add any additional AdvancedMarker properties here
          />
        </Map>
        {/* </MapContainer> */}
      </APIProvider>
    </div>
  );
};

export default EventMap;
