import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// When you register gaetanolongo.gl, change `site` and add a public/CNAME file.
export default defineConfig({
  site: 'https://gaetanolongo.github.io',
  trailingSlash: 'always',
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
