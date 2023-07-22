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
        'secondary-gradient': "linear-gradient(207deg, rgba(21,26,32,1) 30%, rgba(37,40,44,1) 100%);",
        'primary-gradient': "linear-gradient(90deg, rgba(5,16,76,1) 0%, rgba(24,43,211,1) 50%, rgba(5,16,76,1) 100%);",
        'heatpump': "url('/assets/HeatPump.webp')", 
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

