import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

type Event = {
  poster: string;
  title: string;
  date: string;
  location: string;
};

const events: Event[] = [
  {
    poster:
      "https://media.istockphoto.com/id/1159749549/vector/summer-poster-event-template.jpg?s=612x612&w=0&k=20&c=IvaGQLYhGiqhzaRXBk_5h17fAY9xndeP7KpYuEvhcUw=",
    title: "Summer Tides",
    date: "04/04/2024",
    location: "diani mombasa",
  },
  {
    poster:
      "https://media.istockphoto.com/id/1159749549/vector/summer-poster-event-template.jpg?s=612x612&w=0&k=20&c=IvaGQLYhGiqhzaRXBk_5h17fAY9xndeP7KpYuEvhcUw=",
    title: "Summer Tides",
    date: "04/04/2024",
    location: "diani mombasa",
  },
  {
    poster:
      "https://media.istockphoto.com/id/1159749549/vector/summer-poster-event-template.jpg?s=612x612&w=0&k=20&c=IvaGQLYhGiqhzaRXBk_5h17fAY9xndeP7KpYuEvhcUw=",
    title: "Summer Tides",
    date: "04/04/2024",
    location: "diani mombasa",
  },
  {
    poster:
      "https://media.istockphoto.com/id/1159749549/vector/summer-poster-event-template.jpg?s=612x612&w=0&k=20&c=IvaGQLYhGiqhzaRXBk_5h17fAY9xndeP7KpYuEvhcUw=",
    title: "Summer Tides",
    date: "04/04/2024",
    location: "diani mombasa",
  },
];

const Events = () => {
  return (
    <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 py-6">
      {events.map((event: Event) => (
        <div
          key={event.title}
          className="flex flex-col border border-stone-500 shadow cursor-pointer"
        >
          <Image
            alt={event.title}
            src={event.poster}
            height={400}
            width={400}
            className="w-full h-[20rem] object-fill"
          />
          <div className="p-4">
            <h2 className="font-semibold">{event.title}</h2>
            <p>{event.date}</p>
            <p className="flex mt-4 items-center text-slate-500">
              <MapPin size={20} />
              {event.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
