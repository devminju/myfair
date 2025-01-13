import TextField from "@components/TextField";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/todo";

export default function TodoCreator() {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);
  const [error, setError] = useState(false); // 글자 수 20자 제한

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 20) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const addItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!inputValue) return;
      if (error) return;
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: generateUniqueId(),
          value: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <TextField
      value={inputValue}
      changeHandler={onChange}
      keydownHandler={addItem}
      placeholder="할 일을 입력해주세요"
      errorMessage={error ? "20자 이하로 입력해 주세요." : ""}
      disabled={false}
    />
  );
}

const generateUniqueId = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
