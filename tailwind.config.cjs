const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        'accents-8': 'var(--accents-8)',
        'accents-7': 'var(--accents-7)',
        'accents-6': 'var(--accents-6)',
        'accents-5': 'var(--accents-5)',
        'accents-4': 'var(--accents-4)',
        'accents-3': 'var(--accents-3)',
        'accents-2': 'var(--accents-2)',
        'accents-1': 'var(--accents-1)',
      },
    },
  },
  plugins: [],
}
