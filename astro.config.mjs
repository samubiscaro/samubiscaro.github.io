import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const mathConfig = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [[rehypeKatex, { 
    output: 'html',
    macros: { "\\E": "\\mathbb{E}" } // Example: add your custom math macros here
  }]],
};

export default defineConfig({
  site: 'https://samubiscaro.github.io',
  integrations: [
    mdx(mathConfig), // This ensures MDX files render math correctly
    sitemap(), 
    tailwind()
  ],
  markdown: mathConfig, // This ensures .md files render math correctly
});