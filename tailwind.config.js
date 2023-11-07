/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f26d31",
        dark: "#434343",
        placeholder: "#a3a3a3",
        input: "#ebebeb",
        white: "#ffffff",
      },
      fontFamily: {
        reanie: ["Reenie Beanie"],
        lato: ["Lato"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern1": "url('/src/assets/herobg.png')",
        "hero-pattern2": "url(/src/assets/herobg2.png)",
      },
    },
  },
  plugins: [],
};
