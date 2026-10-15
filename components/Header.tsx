"use client";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ASSETS, mediaSrc } from "@/lib/assets";
import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/rooms", key: "nav.rooms" },
  { href: "/spa", key: "nav.spa" },
  { href: "/dining", key: "nav.dining" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-parchment/70 backdrop-blur-xl dark:bg-ink/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={mediaSrc(ASSETS.logo)}
            alt={t("alt.logo")}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-base text-ink dark:text-cream md:text-lg">
            {t("header.brand")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-gold ${
                  active
                    ? "text-gold"
                    : "text-ink/80 dark:text-cream/80"
                }`}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => openWhatsApp(t("whatsapp.general"))}
            className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {t("common.bookNow")}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ink lg:hidden dark:text-cream"
          aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label={t("common.closeMenu")}
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-6 bg-parchment p-6 shadow-xl dark:bg-ink">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg">{t("header.brand")}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("common.closeMenu")}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-ink dark:text-cream"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <div className="flex gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openWhatsApp(t("whatsapp.general"));
                }}
                className="rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
              >
                {t("common.bookNow")}
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
