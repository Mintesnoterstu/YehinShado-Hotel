import { HomePage } from "@/components/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Yehin Shado Hotel | Rooms, Spa, Restaurant & Bar in Jemo 1, Addis Ababa",
  description:
    "Where comfort meets tradition. Book rooms, Moroccan bath spa, restaurant and bar on WhatsApp. 4.7 Google rating. Jemo 1, Addis Ababa.",
  openGraph: {
    title: "Yehin Shado Hotel | Where Comfort Meets Tradition",
    description: "ምቾት እና ወግ የሚገናኙበት — rooms, spa, dining in Jemo 1.",
  },
};

export default function Page() {
  return <HomePage />;
}
