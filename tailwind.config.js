module.exports = {
  purge: ['./pages/**/*.tsx', './layouts/**/*.tsx', './components/**/*.tsx'],
  // darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "3xl":"1920px"
      },
      colors: {
        primary: {
          DEFAULT: '#24292e',
          dark: '#eceff4',
          hover: '#0366d6',
        },
        secondary: {
          DEFAULT: '#586069',
          dark: '#8b949e',
        },
        'primary-bg': {
          DEFAULT: '#ffffff',
          dark: '#0d1116',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
