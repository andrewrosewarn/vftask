import React from "react";
import styled from "styled-components";

const colors = {
  primary: "rgb(0,0,0)",
  secondary: "rgb(126,127,126)",
  brand: "rgb(185, 170, 249)",
};

const sizing = {
  xl: "1.5rem",
  lg: "1.1rem",
  md: "0.9rem",
};

export const StyledTypography = styled.span<StyleProps>`
  color: ${(props) => colors[props.color!]};
  font-size: ${(props) => sizing[props.size!]};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

type Props = {
  children: React.ReactNode;
  size?: keyof typeof sizing;
  color?: keyof typeof colors;
  uppercase?: boolean;
};

type StyleProps = Omit<Props, "children">;

export default function Typography({
  children,
  size = "md",
  color = "primary",
  uppercase,
}: Props) {
  return (
    <StyledTypography size={size} color={color} uppercase={uppercase}>
      {children}
    </StyledTypography>
  );
}
