import { ContactPage } from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Visit Yehin Shado Hotel at Jemo 1, next to Saba Building, 3rd Floor, Addis Ababa. Call or WhatsApp +251 90 422 2223.",
};

export default function Page() {
  return <ContactPage />;
}
