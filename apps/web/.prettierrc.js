const baseConfig = require('@frontend/prettier')

module.exports = {
  ...baseConfig,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
