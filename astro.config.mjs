import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  output: "server",
});