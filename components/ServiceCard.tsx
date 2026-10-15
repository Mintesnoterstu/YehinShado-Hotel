"use client";

import { MediaFrame } from "@/components/MediaFrame";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  href,
  src,
  alt,
  title,
  description,
  cta,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <FadeIn>
      <Link
        href={href}
        className="group block overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-gold transition hover:border-gold/50 dark:bg-surface"
      >
        <div className="overflow-hidden">
          <div className="transition duration-500 group-hover:scale-[1.02]">
            <MediaFrame
              src={src}
              type="image"
              ratio="4/5"
              alt={alt}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl text-ink dark:text-cream">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
            {cta} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
