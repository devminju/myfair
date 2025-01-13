import { atom, selector } from "recoil";
import { TodoItemT, TODO_STATUS } from "@definitions/todo";

export const todoListState = atom<TodoItemT[]>({
  key: "todoList",
  default: [],
});

export const todoListFilterState = atom<string>({
  key: "todoListFilterState",
  default: TODO_STATUS.all,
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case TODO_STATUS.completed:
        return list.filter((item) => item.isCompleted);
      case TODO_STATUS.uncompleted:
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList: TodoItemT[] = get(todoListState);
    const totalNum: number = todoList.length;
    const totalCompletedNum: number = todoList.filter(
      (item) => item.isCompleted
    ).length;
    const totalUnCompletedNum: number = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
    };
  },
});
