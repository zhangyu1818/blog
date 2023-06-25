module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  arrowParens: 'avoid',
  plugins: [require.resolve('prettier-plugin-astro'), require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
