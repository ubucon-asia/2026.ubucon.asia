// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
