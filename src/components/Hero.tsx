import styled from "styled-components";
import bg from "../assets/bg.jpg";

const StyledHero = styled.div`
  background-image: url(${bg});
  background-position: center center;
  background-size: cover;
  height: 330px;
  margin-top: 100px;
`;

export default function Hero() {
  return <StyledHero />;
}
