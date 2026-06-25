import { defineConfig } from 'astro/config';

// Tailwind CSS v4 is wired via PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin. Reason: Astro 6 bundles a Rolldown-based Vite that
// @tailwindcss/vite 4.x is not yet compatible with (build fails with
// "Missing field tsconfigPaths"). The PostCSS variant keeps Tailwind v4 and the
// @theme tokens fully intact while letting Astro use its native bundler.
// See README.md and withastro/astro#16542.
export default defineConfig({
  site: 'https://rodriguezroofing.example',
  compressHTML: true,
});
