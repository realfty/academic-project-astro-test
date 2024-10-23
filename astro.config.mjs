import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://realfty.github.io',
  base: '/academic-project-astro-test',
  integrations: [tailwind(), icon(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
