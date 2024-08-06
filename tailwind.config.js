/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '@media print': {
          '.print\:w-full': {
            width: '100%',
          },
          '.print\:h-auto': {
            height: 'auto',
          },
        },
      });
    },
  ],
}

