/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#173B45',
        'secondary': '#03346E',
        'tertiary': '#F5EDED',
        'quaternary': '#ffff00',
    },
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif']
    },
  },
},
  plugins: [],
}

