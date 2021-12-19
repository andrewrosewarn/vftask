import styled from "styled-components";
import Badge from "../common/Badge";
import Typography from "../common/Typography";

const StyledCartSummary = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

type Props = {
  total: number;
  noOfItems: number;
};

export default function CartSummary({ total, noOfItems }: Props) {
  return (
    <StyledCartSummary>
      <Typography size="lg">£{total}</Typography>
      <Badge label={noOfItems} />
    </StyledCartSummary>
  );
}
