import {
  forwardRef,
  createElement,
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
  ForwardedRef,
  HTMLAttributes,
  ComponentType,
  ComponentPropsWithRef,
  ReactPropTypes,
  ComponentProps,
} from "react";
import { SystemStyleObject } from "../../styled-system/types";
import { css as cssFun, cva, cx } from "../../styled-system/css";

// interface BoxProps<T extends ElementType> extends HTMLAttributes<T> {
//   as?: T;
// }

export type BoxProps<C extends ElementType> = {
  as?: C | ComponentType<any>;
  css?: SystemStyleObject;
} & Omit<ComponentPropsWithRef<C>, "as">;

export const Box = <T extends ElementType = "div">({
  as,
  css,
  className,
  ...props
}: BoxProps<T>) => {
  return createElement(as || "div", {
    ...props,
    className: cx(cssFun(css), className),
  });
};

type FlexProps = ComponentProps<typeof Box> & {
  direction?: "row" | "column" | "rowReverse" | "columnReverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: "noWrap" | "wrap" | "wrapReverse";
};

function Flex({
  align,
  direction,
  justify,
  wrap,
  as,
  css,
  ...rest
}: FlexProps) {
  return (
    <Box
      //   css={{
      //     alignItems: align,
      //     flexDirection: direction,
      //     justifyContent: justify,
      //     flexWrap: wrap,
      //     ...css,
      //   }}
      css={cva({
        base: { display: "flex", ...css },
        variants: {
          align: {
            start: {
              alignItems: "flex-start",
            },
            center: {
              alignItems: "center",
            },
            end: {
              alignItems: "flex-end",
            },
            stretch: {
              alignItems: "stretch",
            },
            baseline: {
              alignItems: "baseline",
            },
          },
          direction: {
            row: {
              flexDirection: "row",
            },
            column: {
              flexDirection: "column",
            },
            rowReverse: {
              flexDirection: "row-reverse",
            },
            columnReverse: {
              flexDirection: "column-reverse",
            },
          },
          justify: {
            start: {
              justifyContent: "flex-start",
            },
            center: {
              justifyContent: "center",
            },
            end: {
              justifyContent: "flex-end",
            },
            between: {
              justifyContent: "space-between",
            },
            around: {
              justifyContent: "space-around",
            },
          },
          wrap: {
            noWrap: {
              flexWrap: "nowrap",
            },
            wrap: {
              flexWrap: "wrap",
            },
            wrapReverse: {
              flexWrap: "wrap-reverse",
            },
          },
        },
        defaultVariants: {
          align: "stretch",
          direction: "row",
          justify: "start",
          wrap: "noWrap",
        },
      }).raw({
        direction,
        align,
        justify,
        wrap,
      })}
      {...rest}
    />
  );
}

function Patterns() {
  return (
    <>
      <Box as="div" css={{ color: "blue.200" }}>
        123
      </Box>
      <Flex direction="column">
        <div>11</div>
        <div>22</div>
        <div>33</div>
        <div>44</div>
      </Flex>
    </>
  );
}

export default Patterns;
