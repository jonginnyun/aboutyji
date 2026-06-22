import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jonginn.info',
  vite: {
    resolve: {
      alias: {
        'aria-query': fileURLToPath(new URL('./src/shims/aria-query.js', import.meta.url)),
        'axobject-query': fileURLToPath(new URL('./src/shims/axobject-query.js', import.meta.url))
      }
    },
    optimizeDeps: {
      noDiscovery: true,
      include: [],
      exclude: ['@astrojs/check', 'vscode-html-languageservice', 'aria-query', 'axobject-query']
    },
    ssr: {
      external: ['aria-query', 'axobject-query']
    }
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
