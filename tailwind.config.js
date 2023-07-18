/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },

    fontFamily: {
      serif: ["Bitter", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        first: "#28282B",
        second: "#F0F0F0",
        background: "#F8F9FA",
        gray: "#C0C0C0",
        strongGray: "#71797E",
      },
      fontSize: {
        pDesk: "1.5rem",
        titleDesk: "1.8rem",
      },
    },
  },
  plugins: [],
};
