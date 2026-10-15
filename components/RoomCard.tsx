"use client";

import { FadeIn } from "@/components/FadeIn";
import { MediaFrame } from "@/components/MediaFrame";
import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";

export function RoomCard({
  src,
  alt,
  name,
  description,
  amenities,
}: {
  src: string;
  alt: string;
  name: string;
  description: string;
  amenities: string[];
}) {
  const { t } = useLanguage();

  return (
    <FadeIn>
      <article className="overflow-hidden rounded-2xl border border-gold/20 bg-white dark:bg-surface">
        <div className="overflow-hidden">
          <div className="transition duration-500 hover:scale-[1.02]">
            <MediaFrame
              src={src}
              type="image"
              ratio="4/5"
              alt={alt}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl text-ink dark:text-cream">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
            {description}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-ink/80 dark:text-cream/80">
            {amenities.map((item) => (
              <li key={item} className="rounded-full border border-gold/25 px-3 py-1">
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.rooms"))}
            className="mt-6 w-full rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {t("rooms.bookRoom")}
          </button>
        </div>
      </article>
    </FadeIn>
  );
}
