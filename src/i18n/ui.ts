export const locales = ["en", "ko"] as const;
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
    languageLabel: "Language",
    ctaPrimaryNotice: "Get updates - coming soon.",
    ctaSecondaryNotice: "Call for proposals - coming soon.",
    sponsorshipNotice: "Sponsorship details - coming soon.",
    travelNotice: "Travel details - coming soon."
  },
  ko: {
    ctaPrimary: "소식 받기",
    ctaSecondary: "발표 제안",
    navHome: "홈",
    navCfp: "CFP",
    navSponsorship: "스폰서십",
    navTravel: "여행 안내",
    navUpdates: "업데이트",
    navProgram: "프로그램",
    navMenu: "메뉴",
    navClose: "닫기",
    sectionHighlights: "주요 프로그램",
    highlightCommunity: "커뮤니티 주도 세션",
    highlightPractical: "실전 워크숍",
    highlightRegional: "지역 네트워킹",
    languageLabel: "언어",
    ctaPrimaryNotice: "소식 받기 - 준비 중입니다.",
    ctaSecondaryNotice: "발표 제안 - 준비 중입니다.",
    sponsorshipNotice: "스폰서십 안내 - 준비 중입니다.",
    travelNotice: "여행 안내 - 준비 중입니다."
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
