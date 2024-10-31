/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        salsa: ['Salsa', 'cursive'],
        stylescript: ['"Style Script"', 'cursive']
      }
    },
  },
  plugins: [],
}

