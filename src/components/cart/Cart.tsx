import styled from "styled-components";
import { removeFromCart, selectCartTotal } from "../../features/cart";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Product } from "../../interfaces/product";
import Badge from "../common/Badge";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Container from "../common/Container";
import { CartList } from "./CartList";
import CartListItem from "./CartListItem";
import Paper from "../common/Paper";
import Typography from "../common/Typography";
import { Divider } from "../common/Divider";

const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CartHeading = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export default function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector(selectCartTotal);

  const dispatch = useAppDispatch();

  const onRemove = (product: Product) => dispatch(removeFromCart(product));

  return (
    <Paper>
      <Divider thickness={3} color="primary" />
      <Container>
        <CartBody>
          <CartHeading>
            <Typography size="xl" uppercase>
              Cart
            </Typography>
            <Badge label={items.length} />
          </CartHeading>
          {items.length === 0 ? (
            <Typography>Your Cart Is Empty</Typography>
          ) : (
            <CartList>
              {items.map((product) => (
                <CartListItem key={product.id}>
                  <CartItem product={product} onRemove={onRemove} />
                </CartListItem>
              ))}
            </CartList>
          )}
          <CartTotal total={cartTotal} />
        </CartBody>
      </Container>
    </Paper>
  );
}
