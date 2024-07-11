/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        darkRed: '#8B0000',
        brown: '#8B4513',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
}
