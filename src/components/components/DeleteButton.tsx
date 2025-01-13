import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  deleteHandler: () => void;
};

export default function DeleteButton({ deleteHandler }: Props) {
  return (
    <StyledButton onClick={deleteHandler}>
      <Image src="/Close.svg" width={24} height={24} alt="delete" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
