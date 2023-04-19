/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxl: "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "385px",
      xxs: "320px",
    },
    extend: {
      colors: {
        blue: "#4A69E2",
        blue_dark: "#324fc7",
        yellow: "#FFA52F",
        white: "#FFFFFF",
        fa_white: "#FAFAFA",
        gray: "#E7E7E3",
        gray_main: "#70706E",
        gray_dark: "#232321",
      },
    },
  },
  plugins: [],
};
