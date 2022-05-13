module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#112340",
      white: "#ffffff",
      grey: "#7d8797",
      purple: "#563AD6",
      blue: "#3ABAD6",
    },
    fontFamily: {
      body: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
