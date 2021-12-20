import styled from "styled-components";
import Button from "./Button";
import Typography from "./Typography";

const StyledLoadingError = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type Props = {
  message: string;
  onRetry: () => void;
};

export default function LoadingError({ message, onRetry }: Props) {
  return (
    <StyledLoadingError>
      <Typography>{message}</Typography>
      <Button color="primary" size="small" onClick={onRetry}>
        Retry
      </Button>
    </StyledLoadingError>
  );
}
