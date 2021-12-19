import styled from "styled-components";

const colors = {
  primary: {
    bg: "rgb(145, 122, 247)",
    font: "rgb(255,255,255)",
  },
  secondary: {
    bg: "rgb(230, 228, 231)",
    font: "rgb(126,126,126)",
  },
};

const sizing = {
  small: {
    padding: "0.5rem",
    font: "0.7rem",
  },
  large: {
    padding: "1.5rem",
    font: "1rem",
  },
};

type Props = {
  color?: keyof typeof colors;
  size?: keyof typeof sizing;
  children: React.ReactNode;
  onClick?: () => void;
};

type StyleProps = Omit<Props, "children">;

const StyledButton = styled.button<StyleProps>`
  appearance: none;
  border: none;
  background-color: ${(props) => colors[props.color!].bg};
  color: ${(props) => colors[props.color!].font};
  cursor: pointer;
  font-size: ${(props) => sizing[props.size!].font};
  padding: ${(props) => sizing[props.size!].padding};
  text-transform: uppercase;
`;
export default function Button({
  children,
  color = "secondary",
  size = "large",
  onClick,
}: Props) {
  return (
    <StyledButton color={color} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
