"use client";

import { MediaFrame } from "@/components/MediaFrame";
import { FadeIn } from "@/components/FadeIn";

export type ReelItem = {
  src: string;
  poster: string;
  caption: string;
};

export function ReelsScroll({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ReelItem[];
}) {
  return (
    <section className="px-4 py-16">
      <FadeIn className="mx-auto mb-8 max-w-6xl text-center">
        <h2 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
          {title}
        </h2>
        <div className="gold-line mx-auto mt-4 w-24" />
        {subtitle ? (
          <p className="mt-3 text-ink/70 dark:text-cream/70">{subtitle}</p>
        ) : null}
      </FadeIn>
      <div className="mx-auto max-w-6xl">
        <div className="reels-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {items.map((item) => (
            <figure
              key={item.src}
              className="w-[83.333%] shrink-0 snap-start sm:w-[40%] lg:w-[25%]"
            >
              <div className="overflow-hidden rounded-2xl border border-gold/25 transition duration-500 hover:scale-[1.03]">
                <MediaFrame
                  src={item.src}
                  type="video"
                  ratio="9/16"
                  poster={item.poster}
                  sizes="(max-width: 640px) 83vw, (max-width: 1024px) 40vw, 25vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-ink/70 dark:text-cream/70">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
