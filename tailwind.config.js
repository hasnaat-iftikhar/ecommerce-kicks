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
    extend: {
      colors: {
        blue: "#4A69E2",
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
