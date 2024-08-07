/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#162326",
        'secondary': '#162529',
        'tertiary': '#c9c5c3',
        'quaternary': '#182b30',
    },
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif']
    },
  },
},
  plugins: [],
}

