import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({ fontSize: "2xl", fontWeight: "bold", bg: "red.100" })}
    >
      Hello 🐼!
    </div>
  );
}
