import { defaultLocale } from "../i18n/ui";
import type { Locale } from "../i18n/ui";

export type SiteMetadata = {
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  description: string;
};

export const siteMetadata: Record<Locale, SiteMetadata> = {
  en: {
    title: "UbuCon Asia 2026",
    date: "August 8-9",
    venue: "NTUST, Taipei, Taiwan",
    subtitle: "@ COSCUP",
    description: "Aug 8-9 | Co-hosted with COSCUP | NTUST, Taipei, Taiwan",
  },
  ko: {
    title: "우부콘 아시아 2026",
    date: "August 8-9",
    venue: "NTUST, Taipei, Taiwan",
    subtitle: "@ COSCUP",
    description:
      "오픈 소스를 만들고, 배포하고, 전파하는 사람들을 위한 지역 커뮤니티 모임입니다.",
  },
} as const;

export const getSiteMetadata = (locale?: Locale) =>
  siteMetadata[locale ?? defaultLocale] ?? siteMetadata[defaultLocale];

export const siteConfig = {
  cfpLink: {
    link: "https://events.canonical.com/event/146/abstracts/",
    socialCardImage: "",
  }
} as const;

export type SiteConfig = typeof siteConfig;
