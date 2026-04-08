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
          key: "navCfp",
          path: "/cfp",
          hash: "#cfp",
        },
      ],
    },
    {
      key: "navTravel",
      items: [
        {
          key: "navTravelGrant",
          path: "/venue-and-travel/travel-grant",
          hash: "",
        },
        {
          key: "navVisas",
          path: "/venue-and-travel/visas-and-other-travel-requirements",
          hash: "",
        },
      ],
    },
  ],
  secondary: [],
} as const;
