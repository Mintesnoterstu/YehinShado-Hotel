import { PHONE_TEL } from "@/lib/whatsapp";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Yehin Shado Hotel",
    description:
      "Hotel with rooms, Moroccan bath spa, restaurant and bar in Jemo 1, Addis Ababa.",
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jemo 1, next to Saba Building, 3rd Floor",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.961,
      longitude: 38.72,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      reviewCount: "48",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Front Desk", value: true },
    ],
    priceRange: "$$",
    sameAs: ["https://www.tiktok.com/@yehin.shado.hotel"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
