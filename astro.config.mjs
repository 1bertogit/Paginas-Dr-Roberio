import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
    output: 'static',
    adapter: vercel(),
    prefetch: true,
    compressHTML: true,
    vite: {
        build: { target: 'es2020', cssCodeSplit: true, minify: 'esbuild' },
    },
    integrations: [sitemap(), astroImageTools],
});
