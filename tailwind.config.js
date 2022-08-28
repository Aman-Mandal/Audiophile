/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#D27040',
        'light-orange': '#D97E4A',
        'very-light-orange': '#DF9768',
      },
      backgroundImage: {
        'circle-pattern':
          "url('../public/images/home/desktop/pattern-circles.svg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
