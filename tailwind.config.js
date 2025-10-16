const { DEFAULT_EXTENSIONS } = require("@babel/core");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-semiBold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-extraBold": ["Rubik-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "38C8E98",
          200: "#6666856",
          300: "#191d31",
        },
      },
    },
    plugins: [],
  },
};
