/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Noah: ["Noah Text", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      xsm: "300px",
      sm: "640px",
      md: "780px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        darkBlue: "#043959",
        blue: "#34668b",
        lightBlue: "#bac9ce",
        grey: "#bbcacf",
        yellow: "#ecbf48",
        darkYellow: "#8b7f53",
        dark: "#323232",
        white: "#ffffff",
      },
      backgroundImage: {
        // EXAMPLE
        // hero: "url('/img/hero/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
