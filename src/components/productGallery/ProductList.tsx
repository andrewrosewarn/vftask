import styled from "styled-components";
import { Product } from "../../interfaces/product";
import ProductListItem from "./ProductListItem";

const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}
