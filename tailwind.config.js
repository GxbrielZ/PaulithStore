/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#92a8d1",
        secondary: "#abb1cf",
        prelude: "#c5b9cd",
        melanie: "#dec2cb",
        coralCandy: "#f7cac9",
        goldenrod: '#ffffe0',
        fossil: '#787276'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    }
  },
  plugins: [],
}