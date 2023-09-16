import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // importしたいファイルを記載
          additionalData: `@import "src/styles/_mixin.scss", "src/styles/rem.scss";`
        }
      }
    }
  },
  integrations: [react()]
});