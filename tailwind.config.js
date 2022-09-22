/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1441px",
      "3xl": "1541px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        josefin: "'josefin-sans' , sans-serif",
      },
      lineHeight: {
        56: "56px",
        45: "45px",
      },
      content: {
        'blank': "''",
      },
      colors: {
        orange: {
          500: "#FF6D04",
        },
        black: {
          500: "#414141",
          600: "#1C1C23",
          DEFAULT: "#000000",
        },
        gray: {
          300: "#BDBDBD",
          400: "#898989",
          500: "#707070",
          600: "#BFBFBF",
          700: "#757575",
        },
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(180deg, #FFEDE1 0%, #E5F9FE 100%)",
        "back-image-welcome": "url('../assets/images/back-welcome.svg')",
        "contact-image": "url('../assets/images/contact-us.svg')",
      },
      borderRadius: {
        "md": "5px",
      },
      spacing: {
        0.4: "0.4px",
      },
      backdropBlur: {
        35: "35px",
      },
      minHeight: {
        "auth-screen": "calc(100vh - 101px)",
      },
      maxWidth: {
        "654": "654px",
        "180": '180px',
      },
    },
  },
  plugins: [],
};
