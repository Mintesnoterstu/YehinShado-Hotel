"use client";

import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
