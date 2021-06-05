const defaultFamily = [
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
]

module.exports = {
  mode: 'jit',
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
        xl: '1440px',
        lg: '1280px',
        md: '1024px',
        sm: '876px',
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
      backgroundColor: {
        tertiary: 'var(--color-bg-tertiary)',
      },
      transitionTimingFunction: {
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      fontFamily: {
        inconsolata: ['Inconsolata', ...defaultFamily],
        hammersmith: ['Hammersmith One', ...defaultFamily],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
