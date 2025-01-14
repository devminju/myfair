import styled from "@emotion/styled";

type Props = {
  title: string;
  selected: boolean;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Badge({ title, selected, clickHandler }: Props) {
  return (
    <StyledBadge selected={selected} onClick={clickHandler}>
      {title}
    </StyledBadge>
  );
}

const StyledBadge = styled.button<{ selected: boolean }>`
  width: 180px;
  height: 40px;
  padding: 32px 8px;
  border-radius: 12px;
  border: none;
  background-color: ${({ selected }) => (selected ? "#ebf4ff" : "#ffffff")};
  color: ${({ selected }) => (selected ? "#2182f3" : "#454545")};
  transition:
    background-color 0.15s,
    color 0.15s;
  cursor: pointer;
  fotn-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
