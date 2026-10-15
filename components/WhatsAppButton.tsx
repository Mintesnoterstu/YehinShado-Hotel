"use client";

import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      aria-label={t("common.bookNow")}
      onClick={() => openWhatsApp(t("whatsapp.general"))}
      className="wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}
