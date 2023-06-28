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
        'secondary-gradient': "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% );",
        'primary-gradient': "linear-gradient(45deg, hsla(214, 100%, 60%, 1) 0%, hsla(252, 57%, 43%, 1) 100%);",
      },
      fontFamily: {
        'sans':['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

