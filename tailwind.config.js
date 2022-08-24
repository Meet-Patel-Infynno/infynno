/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)',
        'btn-shadow':'0px 8px 16px -6px rgba(254, 110, 6, 0.46)',
        'car-detail':'0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)',
      },
      colors: {
        'card-btn': 'linear-gradient(147.14deg,#FF8800 6.95%,#E63535 93.05%)',
      },
    },
  },
  plugins: [],
}
