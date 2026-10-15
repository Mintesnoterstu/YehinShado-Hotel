"use client";

import { FadeIn } from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({
  title,
  items,
}: {
  title: string;
  items: FAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 py-16">
      <FadeIn className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="font-serif text-3xl text-ink dark:text-cream md:text-4xl">
          {title}
        </h2>
        <div className="gold-line mx-auto mt-4 w-24" />
      </FadeIn>
      <div className="mx-auto max-w-3xl divide-y divide-gold/20 rounded-2xl border border-gold/20 bg-white dark:bg-surface">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-medium text-ink dark:text-cream">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? (
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
