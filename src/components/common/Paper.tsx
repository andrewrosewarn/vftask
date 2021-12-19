import styled from "styled-components";

const StyledPaper = styled.div`
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

type Props = {
  children: React.ReactNode;
};

export default function Paper({ children }: Props) {
  return <StyledPaper>{children}</StyledPaper>;
}
