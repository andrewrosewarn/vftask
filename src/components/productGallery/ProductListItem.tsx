import styled from "styled-components";
import { addToCart } from "../../features/cart";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Product } from "../../interfaces/product";
import Button from "../common/Button";
import Container from "../common/Container";
import Paper from "../common/Paper";
import Typography from "../common/Typography";
import ProductImage from "./ProductImage";

const StyledProductListItem = styled.li``;

const ImageContainer = styled.div`
  background-color: rgb(245, 243, 246);
  padding: 1rem;
`;

const DetailContainer = styled.div`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  gap: 25px;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;

  > button {
    flex: 1;
  }
`;

type Props = {
  product: Product;
};

export default function ProductListItem({ product }: Props) {
  const { image, productTitle, variantTitle, price } = product;
  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <StyledProductListItem>
      <Paper>
        <Container>
          <ImageContainer>
            <ProductImage src={image} />
          </ImageContainer>
          <DetailContainer>
            <ProductDetail>
              <Typography uppercase size="lg">
                {productTitle}
              </Typography>
              <Typography uppercase color="secondary">
                {variantTitle}
              </Typography>
            </ProductDetail>
            <Typography size="lg">£{price}</Typography>
          </DetailContainer>
          <ButtonContainer>
            <Button onClick={onAddToCart} color="primary">
              Add To Cart
            </Button>
            <Button>Quick View</Button>
          </ButtonContainer>
        </Container>
      </Paper>
    </StyledProductListItem>
  );
}
