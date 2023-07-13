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
        'secondary-gradient': "linear-gradient(to right, #24c6dc, #514a9d);",
        'primary-gradient': "linear-gradient(90deg, rgba(211,228,247,1) 32%, rgba(239,242,251,1) 43%, rgba(196,210,228,1) 67%, rgba(235,240,247,1) 100%);",
        
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

