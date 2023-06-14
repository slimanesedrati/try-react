/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['karla', 'sans-serif'],
        serif: ['Sigmar']
      },
      colors: {
        'react-blue' : '#61DAFB',
      }
    },
  },
  plugins: [],
}

