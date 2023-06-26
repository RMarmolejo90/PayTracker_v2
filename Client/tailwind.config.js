/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gears': "url('./src/assets/Gears.webp')",
      }
    },
  },
  plugins: [],
}

