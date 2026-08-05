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
    venue: "國立臺灣科技大學",
    subtitle: "@ COSCUP",
    description: "8 月 8-9 日 | 與 COSCUP 共同主辦 | 國立臺灣科技大學",
  },
} as const;

export const getSiteMetadata = (locale?: Locale) =>
  siteMetadata[locale ?? defaultLocale] ?? siteMetadata[defaultLocale];

export const heroCtas: Record<Locale, HeroCtas> = {
  en: [
    {
      label: "Timetable",
      href: "/timetable",
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
      label: "行程表",
      href: "/timetable",
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
  timetableLink: {
    link: "https://events.canonical.com/event/146/timetable/?layout=room#all.detailed",
    socialCardImage: "",
  },
  cfpLink: {
    link: "https://events.canonical.com/event/146/abstracts/",
    socialCardImage: "",
  },
  ExhLink: {
    link: "https://blog.coscup.org/2026/03/coscup-x-ubucon-asia-2026-first-wave-of.html",
    socialCardImage: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export interface SubMenuItem {
  link: string;
  label: string;
}

export const WebsiteConfig = {
  featuredSpeakers: {
    displayOnMainPage: true,
    indicoExportUrl:
      "https://events.canonical.com/export/event/146.json?detail=contributions&occ=yes&pretty=yes",
    contributionIds: [130, 97, 144, 121, 143, 92],
    speakerIds: [
      { db_id: 1313, user: 1348 },
      { db_id: 1312, user: 1320 },
      { db_id: 1345, user: 1415 },
      { db_id: 1309, user: 1350 },
      { db_id: 1340, user: 1346 },
      { db_id: 1318, user: 1317 },
    ],
    fullSchedulesUrl: "ddd",
  },
  otherSpeakers: {
    displayOnMainPage: true,
    indicoExportUrl:
      "https://events.canonical.com/export/event/146.json?detail=contributions&occ=yes&pretty=yes",
    contributionIds: [
      134, 143, 95, 98, 86, 100, 123, 131, 125, 105, 106, 116,
      124, 137, 120, 93, 94, 102, 107, 122, 136, 135
    ],
    speakerIds: [
      // 134
      { db_id: 1339, user: 1366 },
      { db_id: 1338, user: 1365 },

      // 95
      { db_id: 1316, user: 1319 },
      { db_id: 1314, user: 1309 },
      { db_id: 1315, user: 1310 },

      // 98
      { db_id: 1321, user: 1321 },

      // 123
      { db_id: 1348, user: 1359 },
      { db_id: 1347, user: 1358 },

      // 131
      { db_id: 1337, user: 1362 },

      // 125
      { db_id: 1329, user: 1294 },

      // 137
      { db_id: 1311, user: 1202 },
      { db_id: 1310, user: 1193 },

      // 120
      { db_id: 1346, user: 1349 },

      // 93
      { db_id: 1319, user: 1194 },

      // 94
      { db_id: 1320, user: 1318 },

      // 102
      { db_id: 1322, user: 1327 },

      // 122
      { db_id: 1327, user: 1200 },

      // 136
      {db_id:1331, user:1369},

      // 135
      { db_id: 1342, user: 1368 },
      { db_id: 1341, user: 1367 },

    ],

    fullSchedulesUrl: "",
  },
};

