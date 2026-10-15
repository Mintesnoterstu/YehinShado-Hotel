"use client";

import { ContactForm } from "@/components/ContactForm";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { ASSETS } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import {
  openWhatsApp,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
} from "@/lib/whatsapp";

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        src={ASSETS.building.night2}
        alt={t("alt.heroContact")}
        title={t("contact.heroTitle")}
        subtitle={t("contact.heroSub")}
        compact
        objectPosition="center"
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-gold/20 bg-white p-6 dark:bg-surface">
              <h2 className="font-serif text-2xl text-ink dark:text-cream">
                {t("contact.detailsTitle")}
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="uppercase tracking-widest text-gold">
                    {t("contact.addressLabel")}
                  </dt>
                  <dd className="mt-1 text-ink/80 dark:text-cream/80">
                    {t("contact.address")}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-widest text-gold">
                    {t("contact.phoneLabel")}
                  </dt>
                  <dd className="mt-1">
                    <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-widest text-gold">
                    {t("contact.tiktokLabel")}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gold"
                    >
                      {TIKTOK_HANDLE}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-widest text-gold">
                    {t("contact.hoursLabel")}
                  </dt>
                  <dd className="mt-1 text-ink/80 dark:text-cream/80">
                    {t("contact.hours")}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => openWhatsApp(t("whatsapp.general"))}
                className="mt-8 w-full rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
              >
                {t("contact.chatCta")}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 font-serif text-2xl text-ink dark:text-cream">
            {t("contact.mapTitle")}
          </h2>
          <MapEmbed title={t("contact.mapTitle")} />
        </div>
      </section>

      <CTABand title={t("contact.ctaTitle")} subtitle={t("contact.ctaSub")} />
    </>
  );
}
