export const locales = ["en", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    localeName: "EN",
    ctaPrimary: "Get updates",
    ctaSecondary: "Call for proposals",
    navHome: "Home",
    navCfp: "CFP",
    navTravelGrant: "Travel grant",
    navSponsorship: "Sponsorship",
    navTravel: "Venue & Travel",
    navVisas: "Visas and other travel requirements",
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
    contributeTitle: "Contribute",
    contributeDescription:
      "UbuCon Asia is driven by people from the Ubuntu Community - just like you! Contribute to UbuCon Asia 2026 in the way you want today. Let's make the gathering shine together!",
    contributeSpeakerTitle: "Become a speaker",
    contributeSpeakerDescription:
      "Do you have any interesting insights around Ubuntu you would like to share? Submit a proposal today!",
    contributeSpeakerLinkLabel: "Call for proposals",
    contributePrimeTitle: "Nominate a prime session speaker",
    contributePrimeDescription:
      "Who would you like to see as a prime session speaker - who would inspire both the Ubuntu Community and the entire COSCUP audience? Nominate a person as a prime session speaker today!",
    contributePrimeLinkLabel: "Nominate",
    contributeBoothTitle: "Ubuntu Community Booth",
    contributeBoothDescription:
      "Would you like to help spread Ubuntu and its community to new people face to face? Do you have any projects built with or for Ubuntu you would like to showcase? Consider volunteering at the booth!",
    contributeBoothLinkLabel: "Call for Booth Volunteers",
    languageLabel: "Language",
    ctaPrimaryNotice: "Get updates - coming soon.",
    ctaSecondaryNotice: "Call for proposals - coming soon.",
    sponsorshipNotice: "Sponsorship details - coming soon.",
    travelNotice: "Travel details - coming soon.",
  },
  "zh-tw": {
    localeName: "中文",
    ctaPrimary: "接收更新",
    ctaSecondary: "徵稿",
    navHome: "首頁",
    navCfp: "徵稿(CFP)",
    navTravelGrant: "旅遊補助",
    navSponsorship: "贊助",
    navTravel: "會場與旅遊資訊",
    navVisas: "簽證與其他旅遊需求",
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
    contributeTitle: "參與貢獻",
    contributeDescription:
      "UbuCon Asia 由 Ubuntu 社群的夥伴共同推動 - 就像你一樣！現在就用你喜歡的方式參與 UbuCon Asia 2026，一起讓這場聚會更精彩。",
    contributeSpeakerTitle: "成為講者",
    contributeSpeakerDescription:
      "你是否有關於 Ubuntu 的有趣觀點想分享？立即提交你的議程提案！",
    contributeSpeakerLinkLabel: "徵稿",
    contributePrimeTitle: "提名主題演講講者",
    contributePrimeDescription:
      "你希望看到誰成為主題演講講者，啟發 Ubuntu 社群與整個 COSCUP 觀眾？今天就提名一位主題演講講者吧！",
    contributePrimeLinkLabel: "提名",
    contributeBoothTitle: "Ubuntu 社群攤位",
    contributeBoothDescription:
      "你想透過面對面的交流，向更多新朋友介紹 Ubuntu 與 Ubuntu 社群嗎？你是否有使用 Ubuntu 或為 Ubuntu 打造的專案想展示？歡迎考慮成為攤位志工！",
    contributeBoothLinkLabel: "攤位志工招募",
    languageLabel: "語言",
    ctaPrimaryNotice: "接收更新 - 即將推出。",
    ctaSecondaryNotice: "徵稿 - 即將推出。",
    sponsorshipNotice: "贊助資訊 - 即將推出。",
    travelNotice: "旅遊資訊 - 即將推出。",
  },
} as const;

export type UiKey =
  | "ctaPrimary"
  | "ctaSecondary"
  | "localeName"
  | "navHome"
  | "navCfp"
  | "navSponsorship"
  | "navTravel"
  | "navTravelGrant"
  | "navVisas"
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
  | "contributeTitle"
  | "contributeDescription"
  | "contributeSpeakerTitle"
  | "contributeSpeakerDescription"
  | "contributeSpeakerLinkLabel"
  | "contributePrimeTitle"
  | "contributePrimeDescription"
  | "contributePrimeLinkLabel"
  | "contributeBoothTitle"
  | "contributeBoothDescription"
  | "contributeBoothLinkLabel"
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
