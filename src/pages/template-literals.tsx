import { css } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

// const className = css`
//   color: red;
// `;

// const Test1 = styled.h1`
//   color: blue;
// `;

// const Test2 = styled("div")``;

function TemplateLiterals() {
  return (
    <div>
      {/* <div className={className}>1</div> */}
      {/* <Test1>2</Test1> */}
      {/* <Test2>3</Test2> */}
    </div>
  );
}

export default TemplateLiterals;
