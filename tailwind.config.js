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
      fontSize: {
        "36": "36px",
        "4xl": "40px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        josefin: "'Josefin Sans',sans-serif",
      },
      lineHeight: {
        56: "56px",
        45: "45px",
      },
      content: {
        "blank": "''",
      },
      colors: {
        orange: {
          300: "#FFB783",
          500: "#FF6D04",
        },
        black: {
          500: "#414141",
          600: "#1C1C23",
          DEFAULT: "#000000",
        },
        gray: {
          100: "#848484",
          200: "#6B6B6B",
          300: "#BDBDBD",
          400: "#898989",
          500: "#707070",
          600: "#BFBFBF",
          700: "#757575",
          800: "#A6A6A6",
          900: "#BCBCBC",
          1000: "#D9D9D9",
        },
        yellow: {
          600: "#D1A300",
        },
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(180deg, #FFEDE1 0%, #E5F9FE 100%)",
        "appointment-form": "linear-gradient(90deg, #FFEDE1 0%, #FAFEFF 100%)",
        "salon-card-back": "linear-gradient(90deg, #FFF0E5 0%, #F8FEFF 100%)",
        "back-image-welcome": "url('assets/images/back-welcome.svg')",
        "contact-image": "url('assets/images/contact-us.svg')",
        "testimonial-back": "url('assets/images/testimonial-back.svg')",
        "header-back": "url('assets/images/header-back.svg')",
        "blog-back": "url('assets/images/blog.svg')",
      },
      backgroundColor: {
        "overlay": "rgba(0, 0, 0, .8)",
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
        "auth-screen": "calc(100vh - 198px)",
        "screen-40": "40vh",
      },
      maxHeight: {
        "521": "521px",
      },
      minWidth: {
        "150": "150px",
      },
      height: {
        "screen-70": "70vh",
      },
      maxWidth: {
        "654": "654px",
        "180": "180px",
        "246": "246px",
        "100": "100px",
        "213": "213px",
        "365": "365px",
        "80": "80px",
      },
      boxShadow: {
        "service-shadow": "0px 0px 18px rgba(0, 0, 0, 0.25)",
        "confirmation-shadow": "0px 4px 29px rgba(0, 0, 0, 0.25)",
        "blog-card": "0px 1px 37px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "blog-shadow": "0px 5px 20px rgba(255, 255, 255, 0.25)",
      },
      dropShadow: {
        "page-header": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "salon-card-header": "0px 1px 4px rgba(0, 0, 0, 0.25)",
      },
      gridTemplateColumns: {
        "40-60": "40% 60%",
        "30-70": "30%_70%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
