/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacelight: ["SpaceGrotesk_300Light"],
        spaceRegular: ["SpaceGrotesk_400Regular"],
        spaceMedium: ["SpaceGrotesk_500Medium"],
        spaceSemiBold: ["SpaceGrotesk_600SemiBold"],
        spaceBold: ["SpaceGrotesk_700Bold"],
      },
      colors: {
        greyScale: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#D6D6D6",
          400: "#B8B8B8",
          500: "#A6A6A6",
          600: "#7A7A7A",
          700: "#454545",
          800: "#292929",
          900: "#121212",
        },
        primaryBlue: {
          50: "#F5F6FF",
          100: "#DBDEFF",
          200: "#B3B8FF",
          300: "#8F97FF",
          400: "#5C68FF",
          500: "#3140FF",
          600: "#0012F5",
          700: "#000CA3",
          800: "#00097A",
          900: "#000652",
        },
        primaryRed: "#EB5A46",
        primaryOrange: "#FF9F1A",
        primaryGreen: "#14CC8A",
        dodgerBlue: "#3F8CFF",
      },
    },
  },
  plugins: [],
};
