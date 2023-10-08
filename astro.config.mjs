import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind()],
  adapter: netlify()
});