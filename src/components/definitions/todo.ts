export type TodoItemT = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export const TodoState = {
  all: "ALL",
  completed: "To Do",
  uncompleted: "Done",
} as const;

export type TodoStateT = KeyOf<typeof TodoState>;
type KeyOf<T> = keyof T;
