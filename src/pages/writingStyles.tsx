//https://panda-css.com/docs/concepts/writing-styles

import { css, cx } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types";

const style = css({
  backgroundColor: "testYellow",
  p: "20px",
  _hover: {
    p: "40px",
  },
  "&:hover": {
    backgroundColor: "red.200",
  },
});

const style2Atom: SystemStyleObject = {
  m: "16px",
};

const style2 = css(
  {
    paddingTop: "10px",
    padding: "2px",
  },
  style2Atom
);

function WritingStyles() {
  return (
    <div>
      <div className={style}>1</div>
      <div className={cx(style2, "test-className")}>2</div>
    </div>
  );
}

export default WritingStyles;
