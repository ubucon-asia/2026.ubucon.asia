export const locales = ["en", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    ctaPrimary: "Get updates",
    ctaSecondary: "Call for proposals",
    navHome: "Home",
    navCfp: "CFP",
    navSponsorship: "Sponsorship",
    navTravel: "Travel",
    navUpdates: "Updates",
    navProgram: "Program",
    navMenu: "Menu",
    navClose: "Close",
    sectionHighlights: "Highlights",
    highlightCommunity: "Community-led sessions",
    highlightPractical: "Practical workshops",
    highlightRegional: "Regional networking",
    heroDescriptionPrimary:
      "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. Join us in Taipei for two days memorable of conference that connects enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
    heroDescriptionSecondary:
      "This year's UbuCon Asia will be a joint event with COSCUP. Enabling you to experience the Ubuntu community across Asia and the largest FOSS community gathering in Taiwan!",
    languageLabel: "Language",
    ctaPrimaryNotice: "Get updates - coming soon.",
    ctaSecondaryNotice: "Call for proposals - coming soon.",
    sponsorshipNotice: "Sponsorship details - coming soon.",
    travelNotice: "Travel details - coming soon."
  },
  "zh-tw": {
    ctaPrimary: "接收更新",
    ctaSecondary: "徵稿",
    navHome: "首頁",
    navCfp: "CFP",
    navSponsorship: "贊助",
    navTravel: "旅遊資訊",
    navUpdates: "最新消息",
    navProgram: "議程",
    navMenu: "選單",
    navClose: "關閉",
    sectionHighlights: "重點內容",
    highlightCommunity: "社群主導的議程",
    highlightPractical: "實作工作坊",
    highlightRegional: "區域交流",
    heroDescriptionPrimary:
      "UbuCon Asia 是由社群主辦的會議，連結亞洲的 Ubuntu 社群。歡迎來台北，參與為期兩天、連結亞洲各地愛好者、工程師、創作者、研究人員、創業家與貢獻者的精彩活動。",
    heroDescriptionSecondary:
      "今年的 UbuCon Asia 將與 COSCUP 聯合舉辦，讓你同時體驗亞洲的 Ubuntu 社群與台灣最大的 FOSS 社群聚會！",
    languageLabel: "語言",
    ctaPrimaryNotice: "接收更新 - 即將推出。",
    ctaSecondaryNotice: "徵稿 - 即將推出。",
    sponsorshipNotice: "贊助資訊 - 即將推出。",
    travelNotice: "旅遊資訊 - 即將推出。"
  }
} as const;

export type UiKey =
  | "ctaPrimary"
  | "ctaSecondary"
  | "navHome"
  | "navCfp"
  | "navSponsorship"
  | "navTravel"
  | "navUpdates"
  | "navProgram"
  | "navMenu"
  | "navClose"
  | "sectionHighlights"
  | "highlightCommunity"
  | "highlightPractical"
  | "highlightRegional"
  | "heroDescriptionPrimary"
  | "heroDescriptionSecondary"
  | "languageLabel"
  | "ctaPrimaryNotice"
  | "ctaSecondaryNotice"
  | "sponsorshipNotice"
  | "travelNotice";

export const getLocaleFromUrl = (url: URL): Locale => {
  const pathLocale = url.pathname.split("/")[1];
  if (locales.includes(pathLocale as Locale)) {
    return pathLocale as Locale;
  }

  return defaultLocale;
};

export const useTranslations = (locale: Locale) => {
  return (key: UiKey) => ui[locale][key];
};

export const getLocalizedPath = (path: string, locale: Locale) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }

  return `/${locale}${normalized}`;
};
