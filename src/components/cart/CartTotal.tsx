import styled from "styled-components";
import Typography from "../common/Typography";

const StyledCartTotal = styled.div`
  align-items: center;
  background-color: rgb(230, 228, 231);
  display: flex;
  padding: 1rem;

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

type Props = {
  total: number;
};

export default function CartTotal({ total }: Props) {
  return (
    <StyledCartTotal>
      <div>
        <Typography>Total</Typography>
        <Typography color="secondary">Inc. £0 in taxes</Typography>
      </div>
      <Typography size="xl">£{total}</Typography>
    </StyledCartTotal>
  );
}
