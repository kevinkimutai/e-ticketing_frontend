import Header from "@/components/Header/Header";

import Image from "next/image";
import IllustratorImg from "../../../../../public/Queue-amico.png";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { fetchTicketOrder } from "@/utils/fetch/fetchEvents";
import AdmitAttendeeCard from "@/components/Cards/AdmitAttendeeCard";
import { Toaster } from "react-hot-toast";

export default async function page({
  params,
}: {
  params: { ticket_id: string };
}) {
  const session = await getSessionUser();
  const ticketOrder = await fetchTicketOrder(session, +params.ticket_id);

  return (
    <>
      <Header />
      <Toaster />
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full md:w-2/3 mx-auto min-h-screen px-2 sm:px-4 md:px-6 lg:px-12 ">
          <div className="w-full md:w-1/2 ">
            <Image
              src={IllustratorImg}
              alt="edit"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <AdmitAttendeeCard session={session} ticketOrder={ticketOrder} />
        </div>
      </div>
    </>
  );
}
