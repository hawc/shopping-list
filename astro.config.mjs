import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind()]
});