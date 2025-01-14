import { useRecoilState } from "recoil";
import { todoListState } from "@recoil/todo";
import { TodoItemT } from "@definitions/todo";
import Checkbox from "@common/Checkbox";
import DeleteButton from "@common/DeleteButton";
import styled from "@emotion/styled";
import { removeItemAtIndex, replaceItemAtIndex } from "@utils/todo";

type Props = {
  item: TodoItemT;
};

export default function TodoItem({ item }: Props) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((i) => i === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <Container checked={item.isCompleted}>
      <Checkbox
        checked={item.isCompleted}
        changeHandler={toggleItemCompletion}
      />
      <span>{item.value}</span>
      <DeleteButton deleteHandler={deleteItem} />
    </Container>
  );
}

const Container = styled.li<{ checked: boolean }>`
  width: 100%;
  height: auto;
  min-height: 96px;
  display: flex;
  align-items: center;
  gap: 10px; 
  color: ${(props) => (props.checked ? "#868686" : "#000000")};

  input {
  flex-shrink: 0;  
    };

  span {
  flex-grow: 1;  
  weight: 400;
  font-size: 20px;  
    };

button {
  flex-shrink: 0;
}
.
`;
