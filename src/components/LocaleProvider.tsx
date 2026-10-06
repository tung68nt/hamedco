"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "vi" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (vi: string, en: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "vi",
  setLocale: () => {},
  t: (vi) => vi,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("hamedco-locale") as Locale | null;
    if (saved === "vi" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("hamedco-locale", l);
    document.documentElement.lang = l;
  };

  // Simple translate helper for inline bilingual strings
  const t = (vi: string, en: string) => (locale === "en" ? en : vi);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
