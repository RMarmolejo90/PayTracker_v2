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
        'secondary-gradient': "linear-gradient(344deg, rgba(30,41,59,1) 38%, rgba(45,59,82,1) 65%, rgba(43,56,77,1) 97%);",
        'primary-gradient': "linear-gradient(to right, #0f0c29, #302b63, #24243e);",
        
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

