import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
//import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://samubiscaro.github.io',
  base: '/',
  integrations: [mdx(), sitemap(), tailwind()],

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
