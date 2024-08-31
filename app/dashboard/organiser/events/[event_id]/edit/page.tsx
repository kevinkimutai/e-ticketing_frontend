import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import Image from "next/image";

import IllustratorImg from "../../../../../../public/Pen tool-amico.svg";
import Footer from "@/components/Footer/Footer";
import APP_URL from "@/constants";
import {
  fetchEvent,
  fetchLocation,
  fetchLocations,
} from "@/utils/fetch/fetchEvents";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import EditEventForm from "@/components/Form/EditEventForm";
import { Toaster } from "react-hot-toast";

export default async function page({
  params,
}: {
  params: { event_id: string };
}) {
  const session = await getSessionUser();
  const event = await fetchEvent(session, +params.event_id);
  const locations = await fetchLocations(session);

  return (
    <>
      <Header />
      <Toaster />
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full md:w-2/3 px-3 sm:px-6 md:px-12 mx-auto  py-2 sm:py-4">
        <EditEventForm event={event} locations={locations} session={session} />
        <div className="w-full md:w-1/2">
          <Image
            src={IllustratorImg}
            alt="edit"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
