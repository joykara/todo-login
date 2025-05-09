/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#35034a', // purple
        secondary: '#FBBF24', // amber-400
        accent: '#F472B6', // pink-400
      },
    },
  },
  plugins: [],
}
