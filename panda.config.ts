import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalStyle = defineGlobalStyles({
  div: {
    color: "gray.900",
  },
});

export default defineConfig({
  globalCss: globalStyle,
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          testYellow: {
            value: "#7be43133",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
