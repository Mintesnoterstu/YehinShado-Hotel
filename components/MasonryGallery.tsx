"use client";

import { FadeIn } from "@/components/FadeIn";
import { mediaSrc } from "@/lib/assets";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
};

export function MasonryGallery({
  title,
  items,
}: {
  title: string;
  items: GalleryItem[];
}) {
  return (
    <section className="px-4 py-16">
      <FadeIn className="mx-auto mb-10 max-w-6xl text-center">
        <h2 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
          {title}
        </h2>
        <div className="gold-line mx-auto mt-4 w-24" />
      </FadeIn>
      <div className="mx-auto max-w-6xl columns-2 gap-4 lg:columns-3">
        {items.map((item) => (
          <div key={item.src} className="mb-4 break-inside-avoid">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={mediaSrc(item.src)}
                alt={item.alt}
                width={900}
                height={1200}
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
