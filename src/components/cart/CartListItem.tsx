import styled from "styled-components";

const StyledListItem = styled.li`
  border-bottom: 1px solid rgb(245, 245, 246);
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

type Props = {
  children: React.ReactNode;
};

export default function CartListItem({ children }: Props) {
  return <StyledListItem>{children}</StyledListItem>;
}
