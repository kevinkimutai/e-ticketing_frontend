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

export const fetchTicketTypes = async (
  session: string | undefined,
  eventId: number
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/event/${eventId}/ticket-types`, {
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
    console.error("Error fetching tickettypes:", error);
  }
};

export const fetchUser = async (
  userId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/user/${userId}`, {
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
    console.error("Error fetching user:", error);
  }
};

export const fetchAttendee = async (
  attendeeId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/attendee/${attendeeId}`, {
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
    console.error("Error fetching attendee:", error);
  }
};

export const fetchTicket = async (
  ttypeId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/ticket-type/${ttypeId}/ticket`, {
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
    console.error("Error fetching ticket:", error);
  }
};

export const fetchOrder = async (
  orderId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/ticket-order/${orderId}`, {
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
    console.error("Error fetching attendee:", error);
  }
};

export const fetchTicketOrderItem = async (
  ticketId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(
      `${APP_URL}/api/v1/ticket-order/${ticketId}/ticket-order-item`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      }
    );

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
    console.error("Error fetching attendee:", error);
  }
};
export const fetchOrganisersUser = async (session: string | undefined) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/organiser/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const data = await res.json();

      if (data.message == "Failedd To Verify Token") {
        redirect("/api/auth/logout");
      }
    }
  } catch (error) {
    console.error("Error fetching attendee:", error);
  }
};

export const fetchOrganiserEvent = async (
  eventId: number,
  session: string | undefined
) => {
  try {
    const res = await fetch(`${APP_URL}/api/v1/organiser/event/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const data = await res.json();

      if (data.message == "Failedd To Verify Token") {
        redirect("/api/auth/logout");
      }
    }
  } catch (error) {
    console.error("Error fetching attendee:", error);
  }
};
