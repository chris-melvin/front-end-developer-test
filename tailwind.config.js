/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7f6e67",
        secondary: {
          100: "#303030",
          200: "#222222",
          300: "#1c1c1c",
          400: "#f6f6f6",
        },
      },
    },
  },
  plugins: [],
};
