import APP_URL from "@/constants";
import { redirect } from "next/navigation";

export const fetchEvents = async (session: string) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/event`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const { data } = await res.json();

      return data;
    } else {
      const data = await res.json();

      if (data.message == "Failedd To Verify Token") {
        redirect("/api/auth/logout");
      }
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchLocation = async (
  session: string | undefined,
  locationId: number
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/location/${locationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const { data } = await res.json();
      return data;
    } else {
      const data = await res.json();

      if (data.message == "Failedd To Verify Token") {
        redirect("/api/auth/logout");
      }
    }
  } catch (error) {
    console.error("Error fetching location:", error);
  }
};

export const fetchEvent = async (
  session: string | undefined,
  eventId: number
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/event/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const { data } = await res.json();
      return data;
    } else {
      const data = await res.json();

      if (data.message == "Failedd To Verify Token") {
        redirect("/api/auth/logout");
      }
    }
  } catch (error) {
    console.error("Error fetching event:", error);
  }
};
