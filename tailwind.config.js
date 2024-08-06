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
      screens: {
        'sm': '640px',  // Small devices (phones)
        'md': '768px',  // Medium devices (tablets)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (large desktops)
        '2xl': '1536px', // Extra extra large devices (larger desktops)
        'xs': '480px',  // Extra small devices (phones in portrait)
        'xxl': '1600px' // Very large devices (extra large desktops)
      },
    },
  },
  plugins: [],
}
