import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import EventLocation from "@/components/EventLocation/EventLocation";
import Events from "@/components/Events/Events";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import { Search } from "@/components/Search/Search";
import APP_URL from "@/constants";
import { checkUser } from "@/utils/authmiddleware/check-user";
import { getSessionUser } from "@/utils/authmiddleware/getSession";
import { fetchEvents } from "@/utils/fetch/fetchEvents";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await checkUser();
  const session = await getSessionUser();

  const events = await fetchEvents(session!);

  console.log(events);

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <main className="flex min-h-screen flex-col py-2">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner session={session} />
      <MainSection session={session} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
