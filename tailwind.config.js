/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "nav-rgba":"rgb(0, 18, 64)",
        "active-rgba":"rgb(255, 80, 0)",
        "fborder-rgba" : "rgb(40, 40, 40)",
        "card" : "rgb(230, 230, 230)",
      },
      boxShadow:{
        "5xl":"rgb(0 0 0 / 15%) 0px 2px 6px 0px",
        "6xl":"rgb(0 0 0 / 10%) 0px 4px 8px 0px",
      }
    },
  },
  plugins: [],
}

