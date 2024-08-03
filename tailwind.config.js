/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "14px",
        xsm: "11px",
        md: "24px",
        lg: "36px",
      },
      fontFamily: {
        DEFAULT: ["var(--font-montserrat)", "sans"],
        sans: ["var(--font-montserrat)", "sans-serif"],
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
          // 500: "#f9960d",
          // 600: "#dc6d03",
          // 700: "#b74b06",
          // 800: "#94390c",
          // 900: "#7a300d",
          // 950: "#461702",
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
          800: "#1D1F20v", //edit for nav menu
          900: "#000000",
          950: "#000000",
        },
        light: {
          //EDIT FOR FOOOTER ICON
          DEFAULT: "#FFFFF",
          50: "#CBD5E0",
          100: "#F9FAFB",
        },
        grey: {
          // below  eidted
          default: "#323B49",
          300: "#EEEFF2",
          700: "#323B49",
          600: "#718096",
        },

        buttonColor: "#FF6448",
        pageBg: "#F5F5F5",
        primaryRed: "#DA3F3F",
      },
    },
  },
  plugins: [],
});
