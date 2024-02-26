import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://jongander.com',
    base: '/',
    trailingSlash: "ignore",
    prefetch: {
        prefetchAll: true
      },
});
