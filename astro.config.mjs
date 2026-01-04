import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://example.com', // Update with your actual domain
    output: 'static',
    adapter: vercel(),
    prefetch: true,
    compressHTML: true,
    vite: {
        build: { target: 'es2020', cssCodeSplit: true, minify: 'esbuild' },
    },
    integrations: [sitemap()],
    image: {
        // Astro's built-in image optimization
        service: { entrypoint: 'astro/assets/services/sharp' },
    },
});
