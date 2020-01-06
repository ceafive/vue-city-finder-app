const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");


module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    cssnano({
      preset: "default"
    }),
    purgecss({
      content: ["./public/*html", "./src/*.vue", "./src/components/*.vue"],
      defaultExtractor: content =>
        content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    }),

  ]
};