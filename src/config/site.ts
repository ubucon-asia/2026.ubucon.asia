import { defaultLocale } from "../i18n/ui";
import type { Locale } from "../i18n/ui";

export type SiteMetadata = {
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  description: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroCtas = {
  primary: HeroCta;
  secondary: HeroCta;
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
    description: "Aug 8-9 | Co-hosted with COSCUP | NTUST, Taipei, Taiwan",
  },
} as const;

export const getSiteMetadata = (locale?: Locale) =>
  siteMetadata[locale ?? defaultLocale] ?? siteMetadata[defaultLocale];

export const heroCtas: Record<Locale, HeroCtas> = {
  en: {
    primary: {
      label: "Call for proposals",
      href: "/cfp",
    },
    secondary: {
      label: "COSCUP ›",
      href: "https://coscup.org/2026",
    },
  },
  ko: {
    primary: {
      label: "Call for proposals",
      href: "/cfp",
    },
    secondary: {
      label: "COSCUP ›",
      href: "https://coscup.org/2026",
    },
  },
} as const;

export const getHeroCtas = (locale?: Locale) =>
  heroCtas[locale ?? defaultLocale] ?? heroCtas[defaultLocale];

export const siteConfig = {
  cfpLink: {
    link: "https://events.canonical.com/event/146/abstracts/",
    socialCardImage: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
