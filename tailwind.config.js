import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './src/components/docs/**.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
      },
    },
  },
};
