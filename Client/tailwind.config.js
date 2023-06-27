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
        'primary-gradient': "linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );"
      }
    },
  },
  plugins: [],
}

