/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'noto': '"Noto Serif", Georgia, sans',
      'lato': '"Lato","Helvetica Neue",Helvetica,sans-serif'
    }
  },
  plugins: [],
}
