"use client";

import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import { BedDouble, Headphones, Sparkles, Tv, Wifi, Wind } from "lucide-react";

export function RoomsPage() {
  const { t } = useLanguage();
  const amenities = [
    t("rooms.amenities.wifi"),
    t("rooms.amenities.tv"),
    t("rooms.amenities.private"),
    t("rooms.amenities.housekeeping"),
    t("rooms.amenities.bedding"),
    t("rooms.amenities.desk"),
  ];

  return (
    <>
      <PageHero
        src={ASSETS.rooms.standard1}
        alt={t("alt.heroRooms")}
        title={t("rooms.heroTitle")}
        subtitle={t("rooms.heroSub")}
        objectPosition="center"
      />

      <section className="px-4 py-16">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("rooms.introTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
          <p className="mt-5 leading-relaxed text-ink/75 dark:text-cream/75">
            {t("rooms.intro")}
          </p>
        </FadeIn>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <RoomCard
            src={ASSETS.rooms.standard2}
            alt={t("alt.singleRoom")}
            name={t("rooms.singleName")}
            description={t("rooms.singleDesc")}
            amenities={amenities}
          />
          <RoomCard
            src={ASSETS.rooms.double1}
            alt={t("alt.doubleRoom")}
            name={t("rooms.doubleName")}
            description={t("rooms.doubleDesc")}
            amenities={amenities}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("rooms.amenitiesTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
        </FadeIn>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
          {[
            { icon: Wifi, label: t("rooms.amenities.wifi") },
            { icon: Tv, label: t("rooms.amenities.tv") },
            { icon: Wind, label: t("rooms.amenities.private") },
            { icon: Sparkles, label: t("rooms.amenities.housekeeping") },
            { icon: BedDouble, label: t("rooms.amenities.bedding") },
            { icon: Headphones, label: t("rooms.amenities.desk") },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-white px-4 py-8 text-center dark:bg-surface"
            >
              <item.icon className="h-7 w-7 text-gold" />
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <VideoShowcase
        title={t("rooms.videoTitle")}
        body={t("rooms.videoBody")}
        src={ASSETS.videos.roomView}
        poster={ASSETS.rooms.inRoom1}
      />

      <section className="px-4 py-12">
        <FadeIn className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("rooms.photosTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
        </FadeIn>
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto pb-2">
          {[
            { src: ASSETS.rooms.bed, alt: t("alt.roomBed") },
            { src: ASSETS.rooms.inRoom2, alt: t("alt.roomDetail2") },
            { src: ASSETS.rooms.doubleToilet, alt: t("alt.doubleToilet") },
            { src: ASSETS.rooms.standard1, alt: t("alt.singleRoom") },
          ].map((photo) => (
            <div key={photo.src} className="w-64 shrink-0 overflow-hidden rounded-2xl">
              <MediaFrame
                src={photo.src}
                type="image"
                ratio="4/5"
                alt={photo.alt}
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </section>

      <FAQAccordion
        title={t("rooms.faqTitle")}
        items={[
          { q: t("rooms.faq.q1"), a: t("rooms.faq.a1") },
          { q: t("rooms.faq.q2"), a: t("rooms.faq.a2") },
          { q: t("rooms.faq.q3"), a: t("rooms.faq.a3") },
          { q: t("rooms.faq.q4"), a: t("rooms.faq.a4") },
        ]}
      />

      <CTABand
        title={t("rooms.ctaTitle")}
        subtitle={t("rooms.ctaSub")}
        messageKey="whatsapp.rooms"
        ctaLabel={t("rooms.bookRoom")}
      />
    </>
  );
}
