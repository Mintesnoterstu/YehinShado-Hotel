"use client";

import { useLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("common.toggleLanguage")}
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-2 text-sm font-medium text-ink transition hover:border-gold hover:text-gold dark:text-cream"
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "EN" : "አማ"}</span>
    </button>
  );
}
