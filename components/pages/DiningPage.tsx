"use client";

import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { MasonryGallery } from "@/components/MasonryGallery";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHero } from "@/components/PageHero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";
import { Clock } from "lucide-react";

export function DiningPage() {
  const { t } = useLanguage();

  const menu = [
    { title: t("dining.breakfast"), items: t("dining.breakfastItems") },
    { title: t("dining.traditional"), items: t("dining.traditionalItems") },
    { title: t("dining.international"), items: t("dining.internationalItems") },
    { title: t("dining.desserts"), items: t("dining.dessertItems") },
  ];

  return (
    <>
      <PageHero
        src={ASSETS.dining.restaurant}
        alt={t("alt.heroDining")}
        title={t("dining.heroTitle")}
        subtitle={t("dining.heroSub")}
        objectPosition="center"
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <FadeIn className="overflow-hidden rounded-2xl">
            <MediaFrame
              src={ASSETS.dining.craft}
              type="image"
              ratio="3/2"
              alt={t("alt.craft")}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn>
            <h2 className="font-serif text-3xl text-ink dark:text-cream">
              {t("dining.restaurantTitle")}
            </h2>
            <div className="gold-line mt-4 w-24" />
            <p className="mt-5 leading-relaxed text-ink/75 dark:text-cream/75">
              {t("dining.restaurantBody")}
            </p>
          </FadeIn>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <h3 className="mb-6 font-serif text-2xl text-ink dark:text-cream">
            {t("dining.menuTitle")}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {menu.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-gold/20 bg-white p-6 dark:bg-surface"
              >
                <h4 className="text-sm uppercase tracking-[0.2em] text-gold">
                  {block.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 dark:text-cream/75">
                  {block.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl text-ink dark:text-cream">
              {t("dining.barTitle")}
            </h2>
            <div className="gold-line mt-4 w-24" />
            <p className="mt-5 leading-relaxed text-ink/75 dark:text-cream/75">
              {t("dining.barBody")}
            </p>
            <p className="mt-4 text-sm text-gold">{t("dining.barList")}</p>
          </FadeIn>
          <FadeIn className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <MediaFrame
              src={ASSETS.dining.bar}
              type="image"
              ratio="3/2"
              alt={t("alt.bar")}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>

      <VideoShowcase
        title={t("dining.videoTitle")}
        body={t("dining.videoBody")}
        src={ASSETS.videos.diningCelebration}
        poster={ASSETS.dining.bar2}
      />

      <MasonryGallery
        title={t("dining.galleryTitle")}
        items={[
          { src: ASSETS.dining.restaurant, alt: t("alt.restaurant") },
          { src: ASSETS.dining.craft, alt: t("alt.craft") },
          { src: ASSETS.dining.bar, alt: t("alt.bar") },
          { src: ASSETS.dining.bar2, alt: t("alt.bar2") },
        ]}
      />

      <section className="px-4 py-16">
        <FadeIn className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-white p-8 text-center dark:bg-surface">
          <Clock className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-4 font-serif text-3xl text-ink dark:text-cream">
            {t("dining.hoursTitle")}
          </h2>
          <div className="gold-line mx-auto mt-4 w-24" />
          <ul className="mt-6 space-y-2 text-ink/80 dark:text-cream/80">
            <li>{t("dining.hours.restaurant")}</li>
            <li>{t("dining.hours.bar")}</li>
            <li>{t("dining.hours.desk")}</li>
          </ul>
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.dining"))}
            className="mt-8 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          >
            {t("dining.reserve")}
          </button>
        </FadeIn>
      </section>

      <CTABand
        title={t("dining.ctaTitle")}
        subtitle={t("dining.ctaSub")}
        messageKey="whatsapp.dining"
        ctaLabel={t("dining.reserve")}
      />
    </>
  );
}
