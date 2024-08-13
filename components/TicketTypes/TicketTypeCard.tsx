import {
  Bug,
  Contact,
  PersonStanding,
  Shirt,
  Squirrel,
  Turtle,
} from "lucide-react";
import React from "react";

type ComponentProps = {
  ttypes: any;
};

const TicketTypeCard = ({ ttypes }: ComponentProps) => {
  const iconComponentType = (name: string) => {
    if (name.toLowerCase() === "vvip") {
      return <Bug size={60} className="text-cyan-700" />;
    }
    if (name.toLowerCase() === "vip") {
      return <Squirrel size={60} className="text-cyan-700" />;
    }
    if (name.toLowerCase() === "regular") {
      return <Turtle size={60} className="text-cyan-700" />;
    }
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 justify-start items-center my-4 gap-2 md:gap-4 mb-4">
      {ttypes?.map((ttype: any) => (
        <div
          key={ttype.ticket_type_id}
          className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer "
        >
          <p className="font-bold text-right text-lg mb-4">{ttype?.name}</p>
          <div className="flex justify-between items-end">
            {iconComponentType(ttype.name)}
            <p>
              <span className="font-semibold text-lg text-cyan-700 mr-2">
                {ttype.total_tickets - ttype.remaining_tickets}
              </span>
              <span className="font-bold text-xl">/{ttype.total_tickets}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TicketTypeCard;
