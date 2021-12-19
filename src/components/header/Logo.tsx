import styled from "styled-components";

const LogoContainer = styled.div`
  border: 2px solid rgb(145, 122, 247);
  color: rgb(55, 53, 54);
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
`;

const MainText = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  line-height: 1;
`;

const SuperText = styled.span`
  align-self: flex-start;
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  line-height: 1;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <MainText>VF-Apparel</MainText>
      <SuperText>Co</SuperText>
    </LogoContainer>
  );
}
