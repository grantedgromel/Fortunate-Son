/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        surface: "#151518",
        slate1: "#1e1f23",
        slate2: "#2a2c31",
        slate3: "#3a3d44",
        parchment: "#ece7d9",
        accent: "#D4B483",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "Cambria", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
