"use client";

import { FadeIn } from "@/components/FadeIn";
import { MediaFrame } from "@/components/MediaFrame";
import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";

export function SpaCard({
  src,
  alt,
  name,
  tag,
  description,
  benefit,
}: {
  src: string;
  alt: string;
  name: string;
  tag: string;
  description: string;
  benefit: string;
}) {
  const { t } = useLanguage();

  return (
    <FadeIn>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white dark:bg-surface">
        <div className="overflow-hidden">
          <div className="transition duration-500 hover:scale-[1.02]">
            <MediaFrame
              src={src}
              type="image"
              ratio="4/5"
              alt={alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{tag}</p>
          <h3 className="mt-2 font-serif text-2xl text-ink dark:text-cream">{name}</h3>
          <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{description}</p>
          <p className="mt-3 text-sm text-amber dark:text-gold/90">{benefit}</p>
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.spa"))}
            className="mt-auto w-full rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {t("spa.bookSpa")}
          </button>
        </div>
      </article>
    </FadeIn>
  );
}
