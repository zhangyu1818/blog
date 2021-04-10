module.exports = {
  purge: {
    content: ['./pages/**/*.tsx', './layouts/**/*.tsx', './components/**/*.tsx'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'class',
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
