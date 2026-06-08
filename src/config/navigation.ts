import type { UiKey } from "../i18n/ui";

export type NavLink = {
  key: UiKey;
  path: string;
  hash?: string;
};

export type NavDropdown = {
  key: UiKey;
  items: NavLink[];
  align?: "right";
};

export type NavItem = NavLink | NavDropdown;

export type NavigationSettings = {
  primary: NavItem[];
  secondary: NavItem[];
};

export const navigation: NavigationSettings = {
  primary: [
    {
      key: "navAbout",
      items: [
        {
          key: "navAboutTheEvent",
          path: "/about",
        },
        {
          key: "navCoC",
          path: "/code-of-conduct",
          hash: "",
        },
      ],
    },
    {
      key: "navProgram",
      items: [
        {
          key: "navImportantDates",
          path: "/programs/important-dates",
        },
        {
          key: "navExhibitions",
          path: "/exhibition",
        },
      ],
    },
    {
      key: "navCfp",
      path: "/cfp",
    },
    {
      key: "navSponsorship",
      items: [
        {
          key: "navSponsors",
          path: "/sponsors/our-sponsors",
        },
        {
          key: "navBecomeSponsor",
          path: "/sponsors/become-a-sponsor",
        },
      ],
    },
    {
      key: "navTravel",
      items: [
        {
          key: "navTravelGrant",
          path: "/venue-and-travel/travel-grant",
        },
        {
          key: "navVisas",
          path: "/venue-and-travel/visas-and-other-travel-requirements",
        },
      ],
    },
  ],
  secondary: [],
} as const;
