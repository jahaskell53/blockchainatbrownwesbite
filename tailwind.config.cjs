/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"EB Garamond"', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
  },
},
  plugins: [],
}