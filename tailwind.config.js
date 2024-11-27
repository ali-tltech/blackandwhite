/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tournament-primary': '#2C5282',
        'tournament-secondary': '#38A169',
        'tournament-background': '#F7FAFC',
      },
      fontFamily: {
        'tournament': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}