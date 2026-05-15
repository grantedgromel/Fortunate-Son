/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Economist-editorial palette (Claude Design redesign).
        bg: "#f3ece0",
        paper: "#ece4d4",
        ink: "#1a1a1a",
        accent: "#b8332f",
        blue: "#2a4d6e",
        land: "#e1d8c4",
        sea: "#eee6d6",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
