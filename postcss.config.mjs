// Tailwind CSS v4 via PostCSS. See note in astro.config.mjs for why we use the
// PostCSS plugin instead of @tailwindcss/vite on Astro 6 (Rolldown Vite).
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
