const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A7D2E",
        "dark-gray": "#293D2A"
      },
      boxShadow: {
        service: "0px 6px 13px rgba(0, 0, 0, 0.1)"
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
