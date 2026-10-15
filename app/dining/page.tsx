import { DiningPage } from "@/components/pages/DiningPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant & Bar",
  description:
    "Traditional Ethiopian and international dining plus a full bar at Yehin Shado Hotel, Jemo 1, Addis Ababa.",
};

export default function Page() {
  return <DiningPage />;
}
