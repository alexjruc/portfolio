/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        principal : "#182836",
        dark : "#000"
      },
      fontFamily:{
        poppins : "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

