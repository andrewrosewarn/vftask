import styled from "styled-components";

const StyledList = styled.ul`
  border-top: 1px solid rgb(245, 245, 246);
  list-style: none;
  margin: 0;
  padding: 0;
`;
type Props = {
  children: React.ReactNode;
};

export function CartList({ children }: Props) {
  return <StyledList>{children}</StyledList>;
}
