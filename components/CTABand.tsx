"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";

export function CTABand({
  title,
  subtitle,
  messageKey = "whatsapp.general",
  ctaLabel,
}: {
  title: string;
  subtitle?: string;
  messageKey?: string;
  ctaLabel?: string;
}) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-surface px-4 py-16 text-center dark:bg-[#121218]">
      <div className="ethio-texture absolute inset-0" />
      <FadeIn className="relative mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl text-cream md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mt-3 text-cream/70">{subtitle}</p>
        ) : null}
        <button
          type="button"
          onClick={() => openWhatsApp(t(messageKey))}
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {ctaLabel ?? t("common.bookNow")}
        </button>
      </FadeIn>
    </section>
  );
}
