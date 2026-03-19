import { useMemo } from "react";
import { siteContentEn, siteContentZh, type SiteContent } from "../data/content";
import { useI18n } from "./I18nProvider";

export function useSiteContent(): SiteContent {
  const { lang } = useI18n();
  return useMemo(() => (lang === "en" ? siteContentEn : siteContentZh), [lang]);
}

