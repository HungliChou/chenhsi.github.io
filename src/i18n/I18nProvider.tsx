import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "zh" | "en";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "chenhsi.lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-Hant" : "en";
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

