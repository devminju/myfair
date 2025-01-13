import TextField from "@components/TextField";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, todoListStatsState } from "@recoil/todo";

const LIMIT_LENGTH = 20; // 글자 수 20자 제한
const LIMINT_UNCOMPLETE_COUNT = 10; // 처리가 안된 할 일 10개 제한

export default function TodoCreator() {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);
  const [error, setError] = useState(false);
  const count = useRecoilValue(todoListStatsState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > LIMIT_LENGTH) {
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
      helperMessage={
        count.totalUnCompletedNum === LIMINT_UNCOMPLETE_COUNT
          ? "To Do 항목은 10개까지만 추가할 수 있습니다. 완료된 항목을 선택해 Done 항목으로 이동시키세요."
          : ""
      }
      disabled={count.totalUnCompletedNum === LIMINT_UNCOMPLETE_COUNT}
    />
  );
}

const generateUniqueId = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
