import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown()],
  site: 'https://guia-de-carreira.vercel.app',
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});