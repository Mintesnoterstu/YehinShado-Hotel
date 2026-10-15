"use client";

import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <FadeIn
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <h2 className="font-serif text-3xl tracking-tight text-ink dark:text-cream md:text-4xl">
        {title}
      </h2>
      <div className="gold-line mx-auto mt-4 w-24" />
      {subtitle ? (
        <p className="mt-4 text-base text-ink/70 dark:text-cream/70">{subtitle}</p>
      ) : null}
    </FadeIn>
  );
}
