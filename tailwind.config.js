/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#6DE754",
        grey: "#909090",
        background: "#161815",
        card: "#1E201D"
      },
      gridTemplateColumns: {
        "1.1" : "1fr 1.0965fr"
      }
    },
  },
  plugins: [],
}