import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/_mixins.scss";'
        }
      }
    }
  },
  output: "server",
  adapter: netlify()
});