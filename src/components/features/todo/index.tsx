import { useRecoilValue } from "recoil";
import { todoListState } from "@recoil/todo";
import TodoItem from "./TodoItem";
import TodoListFilter from "./TodoListFilter";
import TodoListCount from "./TodoListCount";
import styled from "@emotion/styled";
import TodoCreator from "./TodoCreator";

export default function Todo() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoCreator />
      <List>
        <TodoListFilter />
        <TodoListCount />
        <TodoItems>
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </TodoItems>
      </List>
    </div>
  );
}

const List = styled.div`
  width: 737px;
  height: auto;
  min-height: 580px;
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
