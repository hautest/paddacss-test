import { css } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const className1 = css({
  bg: {
    base: "gray.100",
    sm: "red.100",
    md: "blue.100",
    lg: "green.100",
  },
});

const Test1 = styled("div", {
  base: {
    color: {
      base: "gray.900",
      mdToLg: "red.900",
    },
  },
});

function ResponsiveDesign() {
  return (
    <div className={className1}>
      <div>1</div>
      <Test1>22</Test1>
    </div>
  );
}

export default ResponsiveDesign;
