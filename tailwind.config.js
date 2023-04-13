/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'light_gray': '#f1f5f9',
      'white': '#ffffff',
      'yellow': '#F0B62F',
      'gray': '#64748B',
      'black': '#000000',
      'dark_gray': '#475569',
    },
    fontFamily: {
      'sans': ['Helvetica']
    }
  },
  plugins: [],
}

