"use client";

import { useLanguage } from "@/lib/i18n";
import { openWhatsApp } from "@/lib/whatsapp";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const composed = t("contact.formTemplate")
      .replace("{name}", name)
      .replace("{phone}", phone)
      .replace("{message}", message);
    openWhatsApp(composed);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-gold/20 bg-white p-6 dark:bg-surface"
    >
      <h2 className="font-serif text-2xl text-ink dark:text-cream">
        {t("contact.formTitle")}
      </h2>
      <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">
        {t("contact.formBody")}
      </p>
      <label className="mt-5 block text-sm">
        <span className="mb-1 block text-ink/80 dark:text-cream/80">
          {t("contact.name")}
        </span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-gold/30 bg-transparent px-3 py-2 outline-none ring-gold focus:ring-2"
        />
      </label>
      <label className="mt-4 block text-sm">
        <span className="mb-1 block text-ink/80 dark:text-cream/80">
          {t("contact.phone")}
        </span>
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-gold/30 bg-transparent px-3 py-2 outline-none ring-gold focus:ring-2"
        />
      </label>
      <label className="mt-4 block text-sm">
        <span className="mb-1 block text-ink/80 dark:text-cream/80">
          {t("contact.message")}
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-gold/30 bg-transparent px-3 py-2 outline-none ring-gold focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
      >
        {t("contact.submit")}
      </button>
    </form>
  );
}
