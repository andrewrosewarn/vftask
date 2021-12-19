import styled from "styled-components";
import { Product } from "../../interfaces/product";
import Button from "../common/Button";
import Typography from "../common/Typography";

const StyledCartItem = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
`;

type Props = {
  product: Product;
  onRemove: (product: Product) => void;
};

export default function CartItem({ product, onRemove }: Props) {
  return (
    <StyledCartItem>
      <Typography>{product.productTitle}</Typography>
      <Typography>£{product.price}</Typography>
      <Typography color="brand">{product.variantTitle}</Typography>
      <Button size="small" onClick={() => onRemove(product)}>
        Remove
      </Button>
    </StyledCartItem>
  );
}
