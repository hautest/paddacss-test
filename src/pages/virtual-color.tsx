import { css } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const Test1 = styled("div", {
  base: {
    color: "colorPalette",
    bg: "colorPalette.800",
  },
});

function VirtualColor() {
  return (
    <div
      className={css({
        colorPalette: "orange",
        bg: "colorPalette.300",
      })}
    >
      1<Test1 colorPalette="emerald">22</Test1>
    </div>
  );
}

export default VirtualColor;
