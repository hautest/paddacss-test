import { css } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const className1 = css({
  color: "red.100",
  "&:hover": {
    color: "blue.200",
  },
  //   _hover: {
  //     color: "green.300",
  //   },
});

const Test1 = styled("div", {
  base: {
    bg: {
      base: "gray.100",
      _hover: "blue",
    },
  },
});

const Input1 = styled("input", {
  base: {
    bg: {
      base: "gray.100",
      _hover: {
        base: "blue.200",
        _focus: "green.300",
      },
    },
  },
});

function ConditionalStyles() {
  return (
    <div>
      <div className={className1}>1</div>
      <Test1>22</Test1>
      <Input1 />
    </div>
  );
}

export default ConditionalStyles;
