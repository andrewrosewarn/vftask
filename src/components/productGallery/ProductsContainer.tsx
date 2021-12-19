import styled from "styled-components";

const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

type Props = {
  children?: React.ReactNode;
};

export default function ProductsContainer({ children }: Props) {
  return <StyledProductsContainer>{children}</StyledProductsContainer>;
}
