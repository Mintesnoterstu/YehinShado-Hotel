"use client";

import { FadeIn } from "@/components/FadeIn";
import { MediaFrame } from "@/components/MediaFrame";

export function VideoShowcase({
  title,
  body,
  src,
  poster,
}: {
  title: string;
  body: string;
  src: string;
  poster: string;
}) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <FadeIn>
          <h2 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
            {title}
          </h2>
          <div className="gold-line mt-4 w-24" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 dark:text-cream/70">
            {body}
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="flex justify-center">
          <div className="w-full max-w-[360px] overflow-hidden rounded-3xl border-4 border-gold/40 shadow-gold">
            <MediaFrame
              src={src}
              type="video"
              ratio="9/16"
              poster={poster}
              sizes="360px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
