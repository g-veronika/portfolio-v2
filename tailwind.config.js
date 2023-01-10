/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(10, 25, 47)',
        'secondary': 'rgb(100, 255, 218)',
        'h2': 'rgb(204, 214, 246);'
      },
    },
    fontFamily: {
      'arial': ['Leto', 'sans-serif']
    }
  },
  plugins: [],
}
