/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      colors: {
        spotify: "#1db954",
      },
      animation: {
        marquee: "marquee 4s linear infinite",
        equalizer: "equalizer 1.5s linear infinite",
        "marquee-mini": "marquee-mini 4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(8rem)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-mini": {
          "0%": { transform: "translateX(6rem)" },
          "100%": { transform: "translateX(-100%)" },
        },
        equalizer: {
          "0%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
