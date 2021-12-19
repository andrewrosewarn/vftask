import styled from "styled-components";
import bg from "../assets/bg.jpg";

const StyledHero = styled.img`
  height: 330px;
  width: 100%;
  margin-top: 100px;
  object-fit: cover;
`;

export default function Hero() {
  return <StyledHero src={bg} alt="VF-Appel Logo" />;
}
