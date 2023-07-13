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
        'secondary-gradient': "linear-gradient(to bottom, #bdc3c7, #2c3e50);",
        'primary-gradient': " linear-gradient(to top, #1488cc, #2b32b2);",
        
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

