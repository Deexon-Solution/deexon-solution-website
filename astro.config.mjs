import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server",
  adapter: node({
    mode: 'production', 
  }),
  vite: {
    ssr: {
      // If you use nodemailer or other node modules
      noExternal: ['nodemailer'],
    },
  },
});