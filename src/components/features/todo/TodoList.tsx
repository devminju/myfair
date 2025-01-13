import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/todo";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <Container>
      <TodoItems>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </TodoItems>
    </Container>
  );
}

const Container = styled.div`
  width: 737px;
  height: auto;
  min-height: 580px;
  max-height: 65vh;
  overflow: auto;
  padding: 32px;
  margin-top: 32px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0px 16px 32px 0px var(--blackAlpha100);
  box-shadow: 0px 0px 6px 0px var(--blackAlpha50);
`;

const TodoItems = styled.ul`
  padding: 0;
`;
