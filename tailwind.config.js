/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrime: '#0A0C1B',
        bgPurple: '#1C1938',
        bgPink: '#A35ED0',
        primeGray: '#A397AB'
      },
      backgroundImage: {
        bgComp: 'url(./assets/hero-img-bg.png)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
