"use client";

import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { MapEmbed } from "@/components/MapEmbed";
import { MasonryGallery } from "@/components/MasonryGallery";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { ReelsScroll } from "@/components/ReelsScroll";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import { ADDRESS_EN, openWhatsApp, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import Link from "next/link";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        src={ASSETS.building.night}
        alt={t("alt.heroHome")}
        title={t("home.heroTitle")}
        subtitle={t("home.heroSub")}
        objectPosition="center"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.general"))}
            className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          >
            {t("home.ctaWhatsapp")}
          </button>
          <Link
            href="/rooms"
            className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold"
          >
            {t("home.ctaRooms")}
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-16">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("home.introTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
          <p className="mt-5 text-base leading-relaxed text-ink/75 dark:text-cream/75">
            {t("home.intro")}
          </p>
        </FadeIn>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            t("home.stats.rating"),
            t("home.stats.desk"),
            t("home.stats.wifi"),
            t("home.stats.location"),
          ].map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-gold/30 bg-white px-4 py-5 text-center text-sm font-medium text-ink dark:bg-surface dark:text-cream"
            >
              {stat}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("home.servicesTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
          <p className="mt-3 text-ink/70 dark:text-cream/70">
            {t("home.servicesSub")}
          </p>
        </FadeIn>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            href="/rooms"
            src={ASSETS.rooms.standard1}
            alt={t("alt.serviceRooms")}
            title={t("home.services.roomsTitle")}
            description={t("home.services.roomsDesc")}
            cta={t("common.learnMore")}
          />
          <ServiceCard
            href="/spa"
            src={ASSETS.spa.moroccan1}
            alt={t("alt.serviceSpa")}
            title={t("home.services.spaTitle")}
            description={t("home.services.spaDesc")}
            cta={t("common.learnMore")}
          />
          <ServiceCard
            href="/dining"
            src={ASSETS.dining.restaurant}
            alt={t("alt.serviceDining")}
            title={t("home.services.diningTitle")}
            description={t("home.services.diningDesc")}
            cta={t("common.learnMore")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <FadeIn className="overflow-hidden rounded-2xl">
            <MediaFrame
              src={ASSETS.spa.moroccan2}
              type="image"
              ratio="3/2"
              alt={t("alt.moroccanHighlight")}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-ethiopian">
              Spa
            </p>
            <h2 className="mt-2 font-serif text-3xl text-ink dark:text-cream md:text-4xl">
              {t("home.spaHighlightTitle")}
            </h2>
            <div className="gold-line mt-4 w-24" />
            <p className="mt-5 leading-relaxed text-ink/75 dark:text-cream/75">
              {t("home.spaHighlightBody")}
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp(t("whatsapp.spa"))}
              className="mt-6 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
            >
              {t("home.spaHighlightCta")}
            </button>
          </FadeIn>
        </div>
      </section>

      <ReelsScroll
        title={t("home.reelsTitle")}
        subtitle={t("home.reelsSub")}
        items={[
          {
            src: ASSETS.videos.roomView,
            poster: ASSETS.rooms.inRoom1,
            caption: t("reels.roomView"),
          },
          {
            src: ASSETS.videos.singleStandard,
            poster: ASSETS.rooms.standard1,
            caption: t("reels.single"),
          },
          {
            src: ASSETS.videos.usingMorocco,
            poster: ASSETS.spa.moroccan1,
            caption: t("reels.spa"),
          },
          {
            src: ASSETS.videos.diningCelebration,
            poster: ASSETS.dining.restaurant,
            caption: t("reels.dining"),
          },
          {
            src: ASSETS.videos.doubleRoom,
            poster: ASSETS.rooms.double1,
            caption: t("reels.double"),
          },
          {
            src: ASSETS.videos.doubleRoom2,
            poster: ASSETS.rooms.double1,
            caption: t("reels.doubleTwo"),
          },
        ]}
      />

      <MasonryGallery
        title={t("home.galleryTitle")}
        items={[
          { src: ASSETS.rooms.standard2, alt: t("alt.singleRoom") },
          { src: ASSETS.spa.spaArea, alt: t("alt.spaArea") },
          { src: ASSETS.dining.bar, alt: t("alt.bar") },
          { src: ASSETS.rooms.double1, alt: t("alt.doubleRoom") },
          { src: ASSETS.spa.massageRoom, alt: t("alt.massageRoom") },
          { src: ASSETS.dining.craft, alt: t("alt.craft") },
          { src: ASSETS.building.night2, alt: t("alt.buildingNight2") },
          { src: ASSETS.spa.moroccan3, alt: t("alt.spaMoroccan3") },
        ]}
      />

      <section className="px-4 py-16">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("home.testimonialsTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
        </FadeIn>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <TestimonialCard
            quote={t("home.testimonials.oneQuote")}
            name={t("home.testimonials.oneName")}
            role={t("home.testimonials.oneRole")}
          />
          <TestimonialCard
            quote={t("home.testimonials.twoQuote")}
            name={t("home.testimonials.twoName")}
            role={t("home.testimonials.twoRole")}
            delay={0.08}
          />
          <TestimonialCard
            quote={t("home.testimonials.threeQuote")}
            name={t("home.testimonials.threeName")}
            role={t("home.testimonials.threeRole")}
            delay={0.16}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-serif text-3xl text-ink dark:text-cream">
              {t("home.locationTitle")}
            </h2>
            <div className="gold-line mt-4 w-24" />
            <p className="mt-4 text-ink/75 dark:text-cream/75">
              {t("home.locationBody")}
            </p>
            <p className="mt-4 text-sm">{ADDRESS_EN}</p>
            <a href={`tel:${PHONE_TEL}`} className="mt-2 block text-gold">
              {PHONE_DISPLAY}
            </a>
          </FadeIn>
          <MapEmbed title={t("home.locationTitle")} />
        </div>
      </section>

      <CTABand title={t("home.ctaTitle")} subtitle={t("home.ctaSub")} />
    </>
  );
}
