/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/preline/dist/*.js" 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('rippleui')
  ],
}
