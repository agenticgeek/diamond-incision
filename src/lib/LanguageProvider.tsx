"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Locale, type TranslationStrings } from "@/constants/translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  strings: TranslationStrings;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "fr" || savedLocale === "en")) {
      setLocale(savedLocale);
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, strings: translations[locale] }),
    [locale]
  );

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
