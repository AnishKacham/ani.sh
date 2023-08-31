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
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        dark: "#22272e",
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
