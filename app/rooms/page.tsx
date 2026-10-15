import { RoomsPage } from "@/components/pages/RoomsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "Fully furnished standard single and double rooms at Yehin Shado Hotel, Jemo 1, Addis Ababa. Book on WhatsApp.",
};

export default function Page() {
  return <RoomsPage />;
}
