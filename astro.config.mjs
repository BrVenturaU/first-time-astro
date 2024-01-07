import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://steady-granita-b6ab6b.netlify.app",
  integrations: [preact()],
});
