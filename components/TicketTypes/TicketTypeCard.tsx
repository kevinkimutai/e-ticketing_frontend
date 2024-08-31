import {
  Bone,
  Bug,
  Contact,
  Dog,
  FishSymbol,
  PawPrint,
  PersonStanding,
  Shirt,
  Snail,
  Squirrel,
  Turtle,
  Worm,
} from "lucide-react";
import React from "react";

type ComponentProps = {
  ttypes: any;
};

const otherTtypes = [
  <Worm key={0} size={60} className="text-cyan-700" />,
  <Bone key={1} size={60} className="text-cyan-700" />,
  <Snail key={2} size={60} className="text-cyan-700" />,
  <Dog key={3} size={60} className="text-cyan-700" />,
  <FishSymbol key={4} size={60} className="text-cyan-700" />,
];

const TicketTypeCard = ({ ttypes }: ComponentProps) => {
  const iconComponentType = (name: string) => {
    const type = name.toLowerCase();
    switch (type) {
      case "vvip":
        return <Bug size={60} className="text-cyan-700" />;
      case "vip":
        return <Squirrel size={60} className="text-cyan-700" />;
      case "regular":
        return <PawPrint size={60} className="text-cyan-700" />;
      default:
        // Get a random icon from the otherTypes array
        return otherTtypes[Math.floor(Math.random() * otherTtypes.length)];
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
