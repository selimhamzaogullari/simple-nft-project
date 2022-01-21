const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        'dark-card-bg': '#353445',
        'dark-page-bg': '#13141F'
      }
    },
  },
  plugins: [],
}
