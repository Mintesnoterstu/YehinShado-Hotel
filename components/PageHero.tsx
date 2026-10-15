"use client";

import { MediaFrame } from "@/components/MediaFrame";
import { motion } from "framer-motion";

export function PageHero({
  src,
  alt,
  title,
  subtitle,
  compact = false,
  objectPosition = "top",
  children,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  objectPosition?: "center" | "top" | "bottom";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden md:min-h-[80vh]">
      <div className={compact ? "min-h-[46vh] md:min-h-[52vh]" : "min-h-[80vh]"}>
        <MediaFrame
          src={src}
          type="image"
          ratio="16/9"
          objectPosition={objectPosition}
          alt={alt}
          priority
          className="absolute inset-0 h-full min-h-[inherit] w-full rounded-none !aspect-auto"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:pb-24"
        >
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-cream md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-cream/80 md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
