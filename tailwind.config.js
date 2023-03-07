/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#924EFF",
      "primary-hover": "#6F3BC2",
      "primary-alt": "#BE95FF",
      white: "#FFFFFF",
      "off-white": "#F6EFFF",
      black: "#000000",
      gray: "#A8A8A8",
    },
    fontFamily: {
      butler: ["Butler", "serif"],
      visbyCF: ["Visby CF", "sans-serif"],
    },
    fontSize: {
      sm: "17 px",
    },
    borderRadius: {
      none: "0",
      small: "5px",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
    },
    minWidth: {
      xs: "25px",
      normal: "170px",
      extended: "510px",
      logo: "72px",
      "container-normal": "365px",
    },
    maxWidth: {
      logo: "72px",
      "container-extended": "705px",
    },
    minHeight: {
      sm: "34 px",
      normal: "44 px",
      lg: "440 px",
    },
    extend: {
      width: {
        xs: "25 px",
        sm: "130 px",
        normal: "170 px",
        extended: "510 px",
        logo: "73 px",
      },
      height: {
        sm: "34 px",
        normal: "44 px",
        logo: "72 px",
      },
      spacing: {
        45: "45px",
      },
    },
  },
  plugins: [],
};
