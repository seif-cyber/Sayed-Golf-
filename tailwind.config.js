/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vw: {
          black: '#0a0a0a',
          dark: '#141414',
          gray: '#1f1f1f',
          lightgray: '#2a2a2a',
          red: '#E50000',
          redHover: '#ff1a1a',
          white: '#ffffff',
          silver: '#cccccc',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
