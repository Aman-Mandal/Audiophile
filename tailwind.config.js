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
    },
  },
  plugins: [require('tailwind-scrollbar-hide')  ],
}
