/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#111827",
        secondary: "#FFFFFF",
        tertiary: "#6B7280",
        blue: "#3B82F6",
        gray: "#374151",
        "light-green": "#0D9488",
        green: "#16A34A",
      },
    },
  },
  plugins: [],
};
