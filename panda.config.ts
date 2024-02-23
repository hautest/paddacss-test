import { defineConfig, defineGlobalStyles, defineRecipe } from "@pandacss/dev";

const globalStyle = defineGlobalStyles({
  div: {
    color: "gray.900",
  },
});

const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    backgroundColor: "red.400",
    height: "40px",
    width: "100px",
  },
  variants: {
    variant: {
      a: {
        backgroundColor: "blue.400",
      },
      b: {
        backgroundColor: "green.400",
      },
    },
  },
  jsx: ["Button", "PageButton"],
});

export default defineConfig({
  globalCss: globalStyle,
  jsxFramework: "react",
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  jsxStyleProps: "minimal",

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
      recipes: {
        flex: {
          base: {
            display: "flex",
          },
          variants: {
            direct: {
              raw: {
                flexDirection: "row",
              },
              column: {
                flexDirection: "column",
              },
            },
          },
        },
        button: buttonRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
