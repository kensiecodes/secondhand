/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
        cherry: ['"Cherry Bomb One"', "Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
