import Link from "next/link";
import { RecipeVariantProps, cva } from "../../styled-system/css";
import { StyledComponent, styled } from "../../styled-system/jsx";
import { button } from "../../styled-system/recipes/button";
import { Box } from "./patterns";
import { ComponentProps } from "react";

const TestButton = styled(Box, {
  base: {
    backgroundColor: "red.100",
  },
});

const test1 = cva({
  base: {
    color: "red.100",
    "&:hover": {
      color: "blue.200",
    },
  },
  variants: {
    bg: {
      a: {
        bg: "gray.400",
      },
      b: {
        bg: "red.300",
      },
    },
  },
  defaultVariants: {
    bg: "a",
  },
});

type Test1 = RecipeVariantProps<typeof test1>;

const a: Test1 = {
  bg: "a",
};

function Recipes() {
  return (
    <div
      className={test1({
        bg: "b",
      })}
    >
      <input />
      <div
        className={button({
          variant: "a",
        })}
      >
        123
      </div>
      <TestButton>4456</TestButton>
    </div>
  );
}

export default Recipes;
