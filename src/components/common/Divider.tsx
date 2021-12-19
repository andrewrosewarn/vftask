import styled from "styled-components";

type Props = {
  color?: "primary" | "default";
  thickness?: number;
};

export const Divider = styled.div<Props>`
  height: ${(props) => (props.thickness ? props.thickness + "px" : "1px")};
  background-color: ${(props) =>
    props.color && props.color === "primary"
      ? "rgb(145, 122, 247)"
      : "rgb(230, 228, 231)"};
`;
