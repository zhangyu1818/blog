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
  content: ['./pages/**/*.tsx', './layouts/**/*.tsx', './components/**/*.tsx'],
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
          DEFAULT: 'var(--color-fg-default)',
          hover: 'var(--color-accent-fg)',
        },
        secondary: {
          DEFAULT: 'var(--color-fg-muted)',
        },
      },
      backgroundColor: {
        tertiary: 'var(--color-canvas-subtle)',
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
}
