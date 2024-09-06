/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "18px",
        xsm: "16px",
        base: "14px",
        md: "28px",
        xmd: "44px",
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: {
          DEFAULT: "#f9960d",
          50: "#fffaeb",
          100: "#fff1c6",
          200: "#ffe188",
          300: "#ffcc4a",
          400: "#ffb620",
          500: "#fff7f4", // for shop list bg
        },
        primary: {
          DEFAULT: "#9c7066",
          50: "#faf7f6",
          100: "#f4edec",
          200: "#ecdfdc",
          300: "#ddc8c4",
          400: "#c9a7a0",
          500: "#b38980",
          600: "#9c7066",
          700: "#825b53",
          800: "#6d4e47",
          900: "#5d443f",
          950: "#30221f",
        },
        dark: {
          DEFAULT: "#001C31",
          50: "#89A3BD",
          100: "#7C99B5",
          200: "#6284A7",
          300: "#50708F",
          400: "#28303F", //edited for icon
          500: "#001C31", //edited
          600: "#111827", //edited for title color
          700: "#1D1F20", //edit for hover
          // 800: "#1D1F20", //edit for nav menu
          900: "#000000",
          // 950: "#000000",
        },
        light: {
          //EDIT FOR FOOOTER ICON
          DEFAULT: "#FFFFF",
          50: "#CBD5E0",
          100: "#F9FAFB",
          200: "#F4F4F4",
          300: "#E6E6E6",
          400: "#A3A3A3",
          500: "#FF8C00",
          900: "#FFFFF",
        },
        grey: {
          // below  eidted
          DEFAULT: "#323B49",
          200: "#7C7C7C",
          300: "#EEEFF2",
          700: "#323B49",
          600: "#718096",
        },

        buttonColor: "#FF6448",
        pageBg: "#F5F5F5",
        primaryRed: "#DA3F3F",
        successGreen: "#0CAF60",
        priceColor: "#ADADAD",
      },
    },
  },
  plugins: [],
});
