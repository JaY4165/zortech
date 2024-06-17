import { nextui } from "@nextui-org/react";
// eslint-disable-next-line no-unused-vars
import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line no-unused-vars
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "carrot-orange": {
        50: "#fffaeb",
        100: "#feefc7",
        200: "#fddd8a",
        300: "#fcc64d",
        400: "#fcaf23",
        500: "#f69216",
        600: "#d96706",
        700: "#b44609",
        800: "#92360e",
        900: "#782d0f",
        950: "#451503",
      },
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    nextui({
      theme: {
        extend: {
          colors: {
            "carrot-orange": {
              50: "#fffaeb",
              100: "#feefc7",
              200: "#fddd8a",
              300: "#fcc64d",
              400: "#fcaf23",
              500: "#f69216",
              600: "#d96706",
              700: "#b44609",
              800: "#92360e",
              900: "#782d0f",
              950: "#451503",
            },
          },
        },
      },
    }),
  ],
};
