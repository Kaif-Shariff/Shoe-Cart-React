/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        teko: ["Teko", "sans-serif"],
      },
      colors: {
        primary: "#38fc5a",
        primary_light: "#8eff8a",
        secondary: "#1e1e1e",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
