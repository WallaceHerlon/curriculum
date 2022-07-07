const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./Components/**/*.js', './pages/**/*.js'],
    whitelist: ['body', 'html'],
    whitelistPatterns: [/psv-/],
    whitelistPatternsChildren: [/psv-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
