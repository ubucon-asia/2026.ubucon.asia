import { defaultLocale } from "../i18n/ui";
import type { Locale } from "../i18n/ui";
import COSCUPLogo from "../assets/coscup.svg";
import UbuConAsiaCommitteeLogo from "../assets/UbuConAsiaCommittee.svg";
import OpenSourceCollectiveLogo from "../assets/oscollective.webp";
import UbuntuTaiwanLogo from "../assets/UbuntuTaiwan.svg";

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

export type HeroCtas = HeroCta[];

export const siteMetadata: Record<Locale, SiteMetadata> = {
  en: {
    title: "UbuCon Asia 2026",
    date: "August 8-9",
    venue: "NTUST, Taipei, Taiwan",
    subtitle: "@ COSCUP",
    description: "Aug 8-9 | Co-hosted with COSCUP | NTUST, Taipei, Taiwan",
  },
  "zh-tw": {
    title: "UbuCon Asia 2026",
    date: "8 月 8-9 日",
    venue: "國立臺北科技大學",
    subtitle: "@ COSCUP",
    description: "8 月 8-9 日 | 與 COSCUP 共同主辦 | 國立臺北科技大學",
  },
} as const;

export const getSiteMetadata = (locale?: Locale) =>
  siteMetadata[locale ?? defaultLocale] ?? siteMetadata[defaultLocale];

export const heroCtas: Record<Locale, HeroCtas> = {
  en: [
    {
      label: "Call for proposals (TBD)",
      href: "/cfp",
    },
    {
      label: "Chat with participants",
      href: "https://docs.ubucon.asia/chat/",
    },
    {
      label: "COSCUP ›",
      href: "https://coscup.org/2026",
    },
  ],
  "zh-tw": [
    {
      label: "徵稿 (TBD)",
      href: "/cfp",
    },
    {
      label: "與參與者聊天",
      href: "https://docs.ubucon.asia/chat/",
    },
    {
      label: "COSCUP ›",
      href: "https://coscup.org/2026",
    },
  ],
} as const;

export function getHeroCtas(locale?: Locale) {
  return heroCtas[locale ?? defaultLocale] ?? heroCtas[defaultLocale];
}

export type FooterLogo = {
  alt: string;
  src: string;
  href?: string;
  maxHeight?: number;
  paddingTop?: number;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  legalHtml: string;
  links: FooterLink[];
  logos: FooterLogo[];
  backToTopLabel: string;
};

const footerLogosShared: FooterLogo[] = [
  {
    alt: "Ubuntu Taiwan LoCo Team",
    src: UbuntuTaiwanLogo.src,
    href: "https://discourse.ubuntu.com/t/ubuntu-taiwan-local-community-ubuntu-tw/39883",
  },
  {
    alt: "COSCUP Team",
    src: COSCUPLogo.src,
    href: "https://coscup.org",
  },
  {
    alt: "UbuCon Asia Committee",
    src: UbuConAsiaCommitteeLogo.src,
    href: "https://www.ubucon.asia",
  },
  {
    alt: "Open Source Collective",
    src: OpenSourceCollectiveLogo.src,
    href: "https://www.oscollective.org/",
  },
];

export const footerContent: Record<Locale, FooterContent> = {
  en: {
    legalHtml:
      "&copy; 2026-Present UbuCon Asia Committee. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0. Source code under MIT.",
    links: [
      {
        label: "Contact us with Email",
        href: "mailto:contact@ubucon.asia",
      },
      {
        label: "See source code",
        href: "https://github.com/ubucon-asia/2026.ubucon.asia",
      },
      {
        label: "UbuCon Asia in other years",
        href: "https://www.ubucon.asia",
      },
    ],
    logos: footerLogosShared,
    backToTopLabel: "Go to the top of the page",
  },
  "zh-tw": {
    legalHtml:
      "&copy; 2026-Present UbuCon Asia Committee。 Ubuntu 與 Canonical 為 Canonical Ltd. 的註冊商標。除非另有說明，內容以 CC BY 4.0 授權，原始碼以 MIT 授權。",
    links: [
      {
        label: "Email 聯絡我們",
        href: "mailto:contact@ubucon.asia",
      },
      {
        label: "查看原始碼",
        href: "https://github.com/ubucon-asia/2026.ubucon.asia",
      },
      {
        label: "UbuCon Asia 其他年份",
        href: "https://www.ubucon.asia",
      },
    ],
    logos: footerLogosShared,
    backToTopLabel: "回到頁面頂端",
  },
};

export const getFooterContent = (locale?: Locale) =>
  footerContent[locale ?? defaultLocale] ?? footerContent[defaultLocale];

export const siteConfig = {
  cfpLink: {
    link: "https://events.canonical.com/event/146/abstracts/",
    socialCardImage: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
