/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        input: "#F4F2F2",
        sectionBG: " #E2E2E2",
      },
      maxHeight: {
        700: "780px",
      },
      fontFamily: {
        bellefair: "Bellefair",
        satoshi: "Satoshi",
        stix_two: "STIX Two Text",
        clash_display: "Clash Display",
        baskervville: "Baskervville",
        rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
