"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, type Locale } from "./LocaleProvider";

const LANGS: { code: Locale; flag: string; label: string }[] = [
  { code: "vi", flag: "🇻🇳", label: "VI" },
  { code: "en", flag: "🇬🇧", label: "EN" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  const current = LANGS.find((l) => l.code === locale)!;

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-btn notranslate"
        aria-label="Chọn ngôn ngữ"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-flag">{current.flag}</span>
        <span className="lang-label">{current.label}</span>
        <svg
          width="10"
          height="10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option${lang.code === locale ? " active" : ""}`}
              onClick={() => switchLocale(lang.code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === locale && (
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
