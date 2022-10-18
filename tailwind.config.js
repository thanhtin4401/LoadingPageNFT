/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: "#111111",
        primary: "#DF00A1",
        gray: "#555555",
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
