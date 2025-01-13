import styled from "@emotion/styled";

type CheckboxProps = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export default function Checkbox({ checked, changeHandler }: CheckboxProps) {
  return (
    <StyledInput type="checkbox" checked={checked} onChange={changeHandler} />
  );
}

const StyledInput = styled.input`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  appearance: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background: #2182f3;
  }

  &:checked::before {
    content: "";
    background-image: url("/images/Check.svg");
    background-size: contain; // 이미지가 요소 안으로 들어가도록 조정
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    filter: invert(1); // 색상 변경
  }
`;
