module.exports = {
  purge: ['./pages/**/*.tsx', './layouts/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-text-primary)',
          hover: 'var(--color-text-link)',
        },
        secondary: {
          DEFAULT: '#586069',
          dark: 'var(--color-text-secondary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
