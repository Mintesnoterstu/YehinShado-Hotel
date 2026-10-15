"use client";

import { mediaSrc } from "@/lib/assets";
import { cn } from "@/lib/cn";
import Image from "next/image";

type Ratio = "16/9" | "9/16" | "4/5" | "1/1" | "3/2";
type ObjectPosition = "center" | "top" | "bottom";

const ratioClass: Record<Ratio, string> = {
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

const positionClass: Record<ObjectPosition, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
};

type MediaFrameProps = {
  src: string;
  type: "image" | "video";
  ratio?: Ratio;
  objectPosition?: ObjectPosition;
  alt?: string;
  poster?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaFrame({
  src,
  type,
  ratio = "4/5",
  objectPosition = "center",
  alt = "",
  poster,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaFrameProps) {
  const encoded = mediaSrc(src);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-surface",
        ratioClass[ratio],
        className,
      )}
    >
      {type === "image" ? (
        <Image
          src={encoded}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", positionClass[objectPosition])}
        />
      ) : (
        <video
          src={encoded}
          poster={poster ? mediaSrc(poster) : undefined}
          muted
          autoPlay
          loop
          playsInline
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            positionClass[objectPosition],
          )}
        />
      )}
    </div>
  );
}
