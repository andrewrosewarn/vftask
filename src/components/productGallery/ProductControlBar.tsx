import styled from "styled-components";

const StyledProductControlBar = styled.div``;

type Props = {
  children?: React.ReactNode;
};

export default function ProductControlBar({ children }: Props) {
  return <StyledProductControlBar>{children}</StyledProductControlBar>;
}
