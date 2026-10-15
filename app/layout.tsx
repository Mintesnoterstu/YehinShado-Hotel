import { AppProviders } from "@/components/AppProviders";
import { DocumentTitle } from "@/components/DocumentTitle";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Ethiopic, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_Ethiopic({
  subsets: ["ethiopic", "latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yehinshadohotel.com"),
  title: {
    default:
      "Yehin Shado Hotel | Rooms, Spa, Restaurant & Bar in Jemo 1, Addis Ababa",
    template: "%s | Yehin Shado Hotel",
  },
  description:
    "Where comfort meets tradition. Book rooms, Moroccan bath spa treatments, restaurant tables and bar nights at Yehin Shado Hotel in Jemo 1, Addis Ababa. 4.7 stars. Chat on WhatsApp.",
  keywords: [
    "Yehin Shado Hotel",
    "Addis Ababa hotel",
    "Jemo 1",
    "Moroccan bath",
    "spa Addis Ababa",
    "Ethiopian restaurant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "am_ET",
    siteName: "Yehin Shado Hotel",
    title: "Yehin Shado Hotel | Where Comfort Meets Tradition",
    description:
      "Rooms, spa, restaurant and bar in Jemo 1, Addis Ababa. Book on WhatsApp.",
    images: [
      {
        url: "/images/yihen-shado/building/building%20from%20out%20side%20at%20night.webp",
        width: 1200,
        height: 630,
        alt: "Yehin Shado Hotel at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yehin Shado Hotel",
    description: "Rooms, spa, restaurant and bar in Jemo 1, Addis Ababa.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${noto.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen font-sans">
        <div className="ethio-texture pointer-events-none fixed inset-0 z-0" />
        <AppProviders>
          <DocumentTitle />
          <JsonLd />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <WhatsAppButton />
        </AppProviders>
      </body>
    </html>
  );
}
