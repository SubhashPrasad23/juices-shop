/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { amatic: ["Amatic SC", "sans-serif"] },
      fontWeight: {
        semibold: 700,
        bold: 900,
      },
    },
  },
  plugins: [],
};
