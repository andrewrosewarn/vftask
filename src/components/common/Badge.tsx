import styled from "styled-components";

const StyledBadge = styled.div`
  background-color: rgb(145, 122, 247);
  border-radius: 50%;
  display: grid;
  height: 2.25rem;
  place-items: center;
  width: 2.25rem;

  > span {
    color: rgb(255, 255, 255);
  }
`;

type Props = {
  label: number | string;
};

export default function Badge({ label }: Props) {
  return (
    <StyledBadge>
      <span>{label}</span>
    </StyledBadge>
  );
}
