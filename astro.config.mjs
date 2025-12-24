import { defineConfig } from "astro/config";
// @ts-check
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});