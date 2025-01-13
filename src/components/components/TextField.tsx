import styled from "@emotion/styled";

type Props = {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keydownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
  disabled?: boolean;
};

export default function TextField({
  value,
  changeHandler,
  keydownHandler,
  placeholder,
  errorMessage,
  disabled = true,
}: Props) {
  return (
    <>
      <StyledInput
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        onKeyDown={keydownHandler}
        disabled={disabled}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}

const StyledInput = styled.input`
  width: 737px;
  height: 92px;
  padding: 32px;
  border: none;
  border-radius: 24px;
  outline: none;
  background: #e5e5e5;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  &::placeholder {
    color: #b9b9b9;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  padding: 5px 20px;
  font-size: 16px;
  color: #ff0000;
`;
