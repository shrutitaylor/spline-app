import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';
export default defineConfig({
  plugins: [react(),ghPages()],
  // base: "/portfolio-template-js/",
   base: '/spline-app/',
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS is linked
  },
});
