import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://mycoolsite.com.fake',
    base: '/',
    trailingSlash: "ignore",
    prefetch: {
        prefetchAll: true
      },
});
