const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Glacial Indiff"']
      },
      colors: {
        'primary': '#BB2727',
        'secondary': '#ED2828',
        'beige': '#F8F6F1'
      },
      backgroundImage: {
        'header-pattern': "url('./src/assets/backgrounds/header-pattern.svg')",
      }
    },
  },
  plugins: [],
}

