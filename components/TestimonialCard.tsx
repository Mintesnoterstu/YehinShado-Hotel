"use client";

import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <blockquote className="h-full rounded-2xl border border-gold/20 bg-white p-6 dark:bg-surface">
        <div className="mb-3 flex gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-ink/80 dark:text-cream/80">
          “{quote}”
        </p>
        <footer className="mt-4">
          <cite className="not-italic font-medium text-ink dark:text-cream">
            {name}
          </cite>
          <p className="text-xs text-gold">{role}</p>
        </footer>
      </blockquote>
    </FadeIn>
  );
}
