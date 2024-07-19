/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Dark-Cyan': 'hsl(158, 36%, 37%)',
        'Primary-Cream': 'hsl(30, 38%, 92%)',
        'Neutral-Very-Dark-Blue': 'hsl(212, 21%, 14%)',
        'Neutral-Dark-Grayish-Blue': 'hsl(228, 12%, 48%)',
        'Neutral-White': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Fraunces': ['Fraunces','serif']
      }
    },
  },
  plugins: [],
}

