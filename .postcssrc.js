const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')


module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
    process.env.NODE_ENV === 'production' && purgecss({
      content: ["./public/*html", "./src/*.vue", "./src/components/*.vue"],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      // content =>
      //   content.match(/[A-Za-z0-9-_:\/]+/g) || []
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/
      ]
    }),

  ]
};
