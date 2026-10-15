"use client";

import { useLanguage } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const TITLE_KEYS: Record<string, string> = {
  "/": "meta.homeTitle",
  "/rooms": "meta.roomsTitle",
  "/spa": "meta.spaTitle",
  "/dining": "meta.diningTitle",
  "/contact": "meta.contactTitle",
};

export function DocumentTitle() {
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    document.title = t(TITLE_KEYS[pathname] ?? "meta.homeTitle");
  }, [pathname, t]);

  return null;
}
