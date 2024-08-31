"use client";

import React from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import APP_URL from "@/constants";

type ComponentProps = {
  eventId: number;
  session: string | undefined;
};

const DownloadAttendeesPDF = ({ eventId, session }: ComponentProps) => {
  const downloadAttendeeEvent = async (
    eventId: number,
    session: string | undefined
  ) => {
    try {
      const res = await fetch(
        `${APP_URL}/api/v1/organiser/event/${eventId}/download`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
        }
      );

      if (res.ok) {
        const blob = await res.blob(); // Convert the response to a Blob
        const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
        const link = document.createElement("a"); // Create a link element
        link.href = url;
        link.download = `attendees-${eventId}.pdf`; // Set the download attribute with a filename
        document.body.appendChild(link); // Append the link to the document body
        link.click(); // Programmatically click the link to trigger the download
        link.remove(); // Remove the link after the download is triggered
        window.URL.revokeObjectURL(url); // Clean up the object URL
      } else {
        const data = await res.json(); // Parse the JSON response
        if (data.message === "Failed To Verify Token") {
          redirect("/api/auth/logout"); // Redirect if the token verification failed
        } else {
          console.error("Failed to fetch the PDF:", data.message);
        }
      }
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const downloadPDF = async () => {
    await downloadAttendeeEvent(eventId, session);
  };

  return <Button onClick={downloadPDF}>Download PDF</Button>;
};

export default DownloadAttendeesPDF;
