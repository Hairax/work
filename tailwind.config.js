/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orangeabout': '#FF8540',
        'celeste': '#80E0FF'
      },
      spacing: {
        '20px': '20px',
      }
      
    },
  },
  plugins: [],
}