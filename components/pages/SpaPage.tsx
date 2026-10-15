"use client";

import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MasonryGallery } from "@/components/MasonryGallery";
import { PageHero } from "@/components/PageHero";
import { ReelsScroll } from "@/components/ReelsScroll";
import { SpaCard } from "@/components/SpaCard";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import { BadgeCheck, Droplets, Lock, Sparkles } from "lucide-react";

export function SpaPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        src={ASSETS.spa.spaArea}
        alt={t("alt.heroSpa")}
        title={t("spa.heroTitle")}
        subtitle={t("spa.heroSub")}
        objectPosition="center"
      />

      <section className="px-4 py-16">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("spa.introTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
          <p className="mt-5 leading-relaxed text-ink/75 dark:text-cream/75">
            {t("spa.intro")}
          </p>
        </FadeIn>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SpaCard
            src={ASSETS.spa.moroccan1}
            alt={t("alt.spaMoroccan1")}
            name={t("spa.moroccanName")}
            tag={t("spa.moroccanTag")}
            description={t("spa.moroccanDesc")}
            benefit={t("spa.moroccanBenefit")}
          />
          <SpaCard
            src={ASSETS.spa.sauna}
            alt={t("alt.sauna")}
            name={t("spa.saunaName")}
            tag={t("spa.saunaTag")}
            description={t("spa.saunaDesc")}
            benefit={t("spa.saunaBenefit")}
          />
          <SpaCard
            src={ASSETS.spa.steam}
            alt={t("alt.steam")}
            name={t("spa.steamName")}
            tag={t("spa.steamTag")}
            description={t("spa.steamDesc")}
            benefit={t("spa.steamBenefit")}
          />
          <SpaCard
            src={ASSETS.spa.massage}
            alt={t("alt.massage")}
            name={t("spa.massageName")}
            tag={t("spa.massageTag")}
            description={t("spa.massageDesc")}
            benefit={t("spa.massageBenefit")}
          />
        </div>
      </section>

      <section className="px-4 py-16">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-ink dark:text-cream">
            {t("spa.benefitsTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
        </FadeIn>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgeCheck, label: t("spa.benefits.certified") },
            { icon: Droplets, label: t("spa.benefits.traditional") },
            { icon: Sparkles, label: t("spa.benefits.hygienic") },
            { icon: Lock, label: t("spa.benefits.private") },
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
        title={t("spa.videoTitle")}
        body={t("spa.videoBody")}
        src={ASSETS.videos.usingMorocco}
        poster={ASSETS.spa.moroccan2}
      />

      <ReelsScroll
        title={t("home.reelsTitle")}
        subtitle={t("home.reelsSub")}
        items={[
          {
            src: ASSETS.videos.usingMorocco,
            poster: ASSETS.spa.moroccan1,
            caption: t("reels.spa"),
          },
          {
            src: ASSETS.videos.roomView,
            poster: ASSETS.rooms.inRoom1,
            caption: t("reels.roomView"),
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
        ]}
      />

      <MasonryGallery
        title={t("spa.galleryTitle")}
        items={[
          { src: ASSETS.spa.moroccan1, alt: t("alt.spaMoroccan1") },
          { src: ASSETS.spa.moroccan2, alt: t("alt.spaMoroccan2") },
          { src: ASSETS.spa.moroccan3, alt: t("alt.spaMoroccan3") },
          { src: ASSETS.spa.room, alt: t("alt.spaRoom") },
          { src: ASSETS.spa.spaArea, alt: t("alt.spaArea") },
          { src: ASSETS.spa.sauna, alt: t("alt.sauna") },
          { src: ASSETS.spa.steam, alt: t("alt.steam") },
          { src: ASSETS.spa.massageRoom, alt: t("alt.massageRoom") },
        ]}
      />

      <FAQAccordion
        title={t("spa.faqTitle")}
        items={[
          { q: t("spa.faq.q1"), a: t("spa.faq.a1") },
          { q: t("spa.faq.q2"), a: t("spa.faq.a2") },
          { q: t("spa.faq.q3"), a: t("spa.faq.a3") },
          { q: t("spa.faq.q4"), a: t("spa.faq.a4") },
        ]}
      />

      <CTABand
        title={t("spa.ctaTitle")}
        subtitle={t("spa.ctaSub")}
        messageKey="whatsapp.spa"
        ctaLabel={t("spa.bookSpa")}
      />
    </>
  );
}
