const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: "768px"
    },
    extend: {
      colors: {
        fuchsia: colors.fuchsia
      }
    },
  },
  plugins: [],
}