/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '960px',
        // => @media (min-width: 960px) { ... }

        lg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        'dark-orange': '#D27040',
        'light-orange': '#D97E4A',
        'very-light-orange': '#DF9768',
      },
      backgroundImage: {
        'circle-pattern':
          "url('../public/images/home/desktop/pattern-circles.svg')",
        'speaker-img':
          "url('../public/images/home/desktop/image-speaker-zx7.jpg')",
        'earphone-img':
          "url('../public/images/home/desktop/image-earphones-yx1.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
