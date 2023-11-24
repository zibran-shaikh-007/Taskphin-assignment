/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#E6E6E6",
        dark: "#212121",
        dark1: "#182021",
        light: "#FAFAFA",
        error: "#D86161",
        placeholder: "#7A7A7A",
        primary: "#1597E4",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
