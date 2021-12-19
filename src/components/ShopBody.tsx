import styled from "styled-components";

const StyledShopBody = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-column-gap: 40px;
  margin: auto;
  max-width: 1400px;
  padding: 2rem;
`;

type Props = {
  children?: React.ReactNode;
};

export default function ShopBody({ children }: Props) {
  return <StyledShopBody>{children}</StyledShopBody>;
}
