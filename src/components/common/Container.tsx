import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 1rem;
`;
type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}
