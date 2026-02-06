// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/2026.ubucon.asia",
  integrations: [mdx()],
  i18n: {
    locales: ["en", "zh-tw"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
