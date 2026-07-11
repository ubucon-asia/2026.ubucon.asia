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
    navSponsorship: "Sponsors",
    navTravel: "Venue & Travel",
    navVisas: "Visas and other travel requirements",
    navAccommodation: "Accommodation",
    navUpdates: "Updates",
    navAbout: "About",
    navAboutTheEvent: "About the event",
    navCoC: "Code of Conduct",
    navProgram: "Program",
    navMenu: "Menu",
    navClose: "Close",
    navSponsors: "Our Sponsors",
    navBecomeSponsor: "Become a sponsor",
    navImportantDates: "Important dates",
    navExhibitions: "Exhibitions",
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
    sponsorTitle: "Our Sponsors",
    sponsorDescription:
      "UbuCon Asia depends on sponsor support to keep the event accessible and community focused. Meet the organizations that help make this conference possible.",
    sponsorLearnMore: "Learn more",
    volunteerTitle: "Volunteer with us",
    volunteerDescription:
      "UbuCon Asia is powered by community volunteers. Join our team to support the event, speakers, and attendees.",
    volunteerLinkLabel: "Contact the volunteer team",
    languageLabel: "Language",
    ctaPrimaryNotice: "Get updates - coming soon.",
    ctaSecondaryNotice: "Call for proposals - coming soon.",
    sponsorshipNotice: "Sponsorship details - coming soon.",
    travelNotice: "Travel details - coming soon.",
    // Sponsors Details
    gsponsorTitleIMA: "Information Management Association",
    gsponsordescriptionIMA: "Founded in 1982, IMA is one of Taiwan's longest-established IT professional organizations, dedicated to strengthening Taiwan's digital competitiveness. IMA remains committed to advancing IT value, fostering cross-sector collaboration, and positioning Taiwan at the forefront of the global digital and AI landscape.",
    gsponsorTitleESunBank: "E.SUN Bank",
    gsponsordescriptionESunBank: "E.SUN Bank, established in 1992 and named after Taiwan’s highest mountain, is dedicated to customer-centric values and committed to developing financial strategies centered around technology and ESG. With more than 1,300 technology professionals forming a technology team responsible for overall digital development, AI applications, IT research, and information security management, we are the first bank in Taiwan to deeply integrate AI into various businesses and the first bank to build our core system using cloud-native technology and a microservices architecture. In recent years, E.SUN Bank has demonstrated outstanding comprehensive performance, winning a total of 8 major awards at the 12th Elite Awards for Taiwan Banking Excellence, which maintain our industry-leading record in total awards received. From Taiwan to Asia, E.SUN Bank steadily grows with flexible strategies and efficient execution, creating sustained value for our customers and moving toward a future of sustainability.",
    gsponsorTitleCFH: "Cathay Financial Holdings",
    gsponsordescriptionCFH: "Cathay Financial Holdings (FHC) is committed to being a technology company with finance at its core. We actively develop and adopt international innovations to build cutting-edge platforms and services through digitalization, data, and technology.By integrating group-level resources, Cathay FHC leverages its strengths in continuous innovation, intelligent applications, and technological leadership to set a benchmark for development environments. At the same time, we continue expanding across the Asia-Pacific, aligning with global trends to become the leading financial institution in the region. Driven by a data-driven culture and a highly collaborative matrix organization, Cathay FHC is dedicated to shaping the future of finance.",
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
    navAccommodation: "住宿",
    navUpdates: "最新消息",
    navProgram: "議程",
    navAbout:"關於",
    navAboutTheEvent: "關於活動",
    navCoC: "Code of Conduct",
    navMenu: "選單",
    navClose: "關閉",
    navSponsors: "我們的贊助商",
    navBecomeSponsor: "加入贊助",
    navImportantDates: "重要日期",
    navExhibitions: "展覽",
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
    sponsorTitle: "贊助夥伴",
    sponsorDescription:
      "UbuCon Asia 依靠贊助夥伴的支持，讓活動持續對社群開放與友善。認識支持本次活動的夥伴。",
    sponsorLearnMore: "瞭解更多",
    volunteerTitle: "成為志工",
    volunteerDescription:
      "UbuCon Asia 由社群志工推動。歡迎加入我們，一起支援活動、講者與參與者。",
    volunteerLinkLabel: "聯絡志工團隊",
    languageLabel: "語言",
    ctaPrimaryNotice: "接收更新 - 即將推出。",
    ctaSecondaryNotice: "徵稿 - 即將推出。",
    sponsorshipNotice: "贊助資訊 - 即將推出。",
    travelNotice: "旅遊資訊 - 即將推出。",
    // Sponsors Details
    gsponsorTitleIMA: "中華民國資訊經理人協會",
    gsponsordescriptionIMA: "IMA成立於1982年，是台灣歷史最悠久的IT專業組織之一，致力於提升台灣的數位競爭力。 IMA始終致力於提升IT價值，促進跨產業合作，並將台灣定位在全球數位和人工智慧領域的前沿。",
    gsponsorTitleESunBank: "玉山銀行",
    gsponsordescriptionESunBank: "玉山銀行成立於1992年，取名自台灣最高的山，以顧客體驗為核心的理念，致 力於構建科技與綠色雙軸轉型的的金融發展策略。作為數位金融的領導品牌， 玉山銀行擁有超過1300位科技人才，負責整體的數位發展、智能應用、資訊研 發以及資安管理。為臺灣首家銀行將人工智慧深入應用於各項業務，也是首家 銀行以開放的雲端原生技術、微服務架構自建核心系統。近年來玉山銀行展現 卓越的綜合績效，榮獲第十二屆菁業獎共8項大獎，累計歷屆獲奬總數持續領先 金融同業。從台灣到亞洲，玉山以靈活的策略和高效的執行力穩健發展，為顧 客創造持續的價值，邁向永續經營的未來。",
    gsponsorTitleCFH: "國泰金融控股公司",
    gsponsordescriptionCFH: "國泰金控致力成為「以金融為核心的科技公司」，透過數位、數據與技術，積極研發並導入國際前瞻技術，打造創新平台與產品服務。整合集團資源、強化一站式數位金融體驗，國泰金控發揮持續創新與技術領先優勢，樹立技術與開發環境典範。同時，積極佈局海外並接軌國際，深耕大中華與東南亞市場，注入數據驅動文化，以高效協作的矩陣式組織，持續朝「亞太地區最佳金融機構」願景邁進，共創更好的未來金融。",
  },
} as const;

export type UiKey =
  | "ctaPrimary"
  | "ctaSecondary"
  | "localeName"
  | "navHome"
  | "navAbout"
  | "navAboutTheEvent"
  | "navCoC"
  | "navCfp"
  | "navSponsors"
  | "navBecomeSponsor"
  | "navSponsorship"
  | "navTravel"
  | "navTravelGrant"
  | "navVisas"
  | "navAccommodation"
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
  | "sponsorTitle"
  | "sponsorDescription"
  | "sponsorLearnMore"
  | "volunteerTitle"
  | "volunteerDescription"
  | "volunteerLinkLabel"
  | "navBecomeSponsor"
  | "navImportantDates"
  | "navExhibitions"
  | "languageLabel"
  | "ctaPrimaryNotice"
  | "ctaSecondaryNotice"
  | "sponsorshipNotice"
  | "travelNotice"
  | "gsponsorTitleIMA"
  | "gsponsordescriptionIMA"
  | "gsponsorTitleESunBank"
  | "gsponsordescriptionESunBank"
  | "gsponsorTitleCFH"
  | "gsponsordescriptionCFH";

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
