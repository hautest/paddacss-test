import { exportedStyle } from "@/styles/mergingStyles";
import { css, cva, cx } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types";
import { flex } from "../../styled-system/recipes";

const style1: SystemStyleObject = {
  bg: "red",
};

const style2: SystemStyleObject = {
  bg: "blue",
};

const style3 = css.raw({
  p: "10px",
});

const overrideStlyle = css.raw({
  bg: "green",
  p: "20px",
  _hover: {
    bg: "red",
  },
  "&:hover": {
    bg: "red.200",
  },
});

const cvaStyle = cva({
  base: {
    bg: "pink.100",
    p: "40px",
  },
  variants: {
    type: {
      a: {
        bg: "blue.200",
      },
    },
  },
});

function MergingStyles() {
  return (
    <>
      <div className={css(style1, style2)}>1</div>
      <div className={css(style3, exportedStyle)}>2</div>
      <div
        className={css(
          cvaStyle.raw({
            type: "a",
          }),
          overrideStlyle
        )}
      >
        3
      </div>
      <div
        className={cx(
          flex({
            direct: "column",
          }),
          css({
            flexDirection: "row",
            display: "flex",
          })
        )}
      >
        <span>1</span>
        <span>2</span>
      </div>
    </>
  );
}

export default MergingStyles;
