import { Contact, PersonStanding } from "lucide-react";
import React from "react";

type ComponentProps = {
  ttypes: any;
};

const TicketTypeCard = ({ ttypes }: ComponentProps) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 justify-start items-center my-4 gap-2 md:gap-4 mb-4">
      {ttypes?.map((ttype: any) => (
        <div
          key={ttype.ticket_type_id}
          className="flex flex-col justify-center p-4 border bg-yellow-200 border-slate-200 rounded-2xl cursor-pointer "
        >
          <p className="font-bold text-right text-lg mb-4">{ttype.name}</p>
          <div className="flex justify-between items-end">
            <PersonStanding size={60} className="text-cyan-700" />
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
