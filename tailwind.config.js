/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // This is the crucial line for v4 to allow button toggling
  darkMode: 'selector', 
  theme: {
    extend: {},
  },
  plugins: [],
}