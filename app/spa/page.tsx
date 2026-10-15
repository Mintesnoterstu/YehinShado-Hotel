import { SpaPage } from "@/components/pages/SpaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Wellness",
  description:
    "Moroccan bath, sauna, steam room and therapeutic massage at Yehin Shado Hotel spa in Addis Ababa.",
};

export default function Page() {
  return <SpaPage />;
}
