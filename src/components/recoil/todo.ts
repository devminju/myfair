import { atom } from "recoil";
import { TodoItemT } from "@definitions/todo";

const todoListState = atom<TodoItemT[]>({
  key: "TodoList",
  default: [],
});

export { todoListState };
