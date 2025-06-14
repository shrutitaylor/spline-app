import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: "/portfolio-template-js/",
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS is linked
  },
});
