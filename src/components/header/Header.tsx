import styled from "styled-components";
import { selectCartItems, selectCartTotal } from "../../features/cart";
import { useAppSelector } from "../../hooks/reduxHooks";
import CartHeaderSummary from "./CartSummary";
import Logo from "./Logo";

const StyledHeader = styled.header`
  align-items: center;
  background-color: rgb(243, 246, 243);
  display: flex;
  height: 100px;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: auto;
  max-width: 1400px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default function Header() {
  const total = useAppSelector(selectCartTotal);
  const items = useAppSelector(selectCartItems);

  return (
    <StyledHeader>
      <InnerContainer>
        <Logo />
        <CartHeaderSummary total={total} noOfItems={items.length} />
      </InnerContainer>
    </StyledHeader>
  );
}
