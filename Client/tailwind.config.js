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
        'primary-gradient': "linear-gradient(to right, #0f0c29, #302b63, #24243e);",
        
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

