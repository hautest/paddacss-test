import Link from "next/link";
import { styled } from "../../styled-system/jsx";

const Test1 = styled(Link, {
  base: {
    color: "testYellow",
    bg: "gray.400",
  },
});

function Styled() {
  return (
    <div>
      <Test1 href="/">123</Test1>
    </div>
  );
}

export default Styled;
