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
      },
      maxHeight: {
        700: "780px",
      },
    },
  },
  plugins: [],
};