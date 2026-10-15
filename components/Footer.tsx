"use client";

import { ASSETS, mediaSrc } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import {
  openWhatsApp,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
} from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gold/20 bg-white px-4 py-14 dark:bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={mediaSrc(ASSETS.logo)}
              alt={t("alt.logo")}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-serif text-lg text-ink dark:text-cream">
              {t("header.brand")}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
            {t("footer.blurb")}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/rooms">{t("nav.rooms")}</Link>
            </li>
            <li>
              <Link href="/spa">{t("nav.spa")}</Link>
            </li>
            <li>
              <Link href="/dining">{t("nav.dining")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("nav.contact")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("footer.contact")}
          </h3>
          <p className="mt-4 text-sm text-ink/70 dark:text-cream/70">
            {t("contact.address")}
          </p>
          <p className="mt-2 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">
            {t("footer.hours")}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("footer.social")}
          </h3>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-sm hover:text-gold"
          >
            {t("footer.tiktok")} {TIKTOK_HANDLE}
          </a>
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.general"))}
            className="mt-4 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
          >
            {t("common.bookNow")}
          </button>
        </div>
      </div>
      <div className="gold-line mx-auto mt-10 max-w-6xl" />
      <p className="mx-auto mt-6 max-w-6xl text-center text-xs text-ink/60 dark:text-cream/50">
        {t("footer.rights")}
      </p>
    </footer>
  );
}
