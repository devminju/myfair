export type TodoItemT = {
  id: string;
  value: string;
  isCompleted: boolean;
};

export const TODO_STATUS = {
  all: "all",
  uncompleted: "uncompleted",
  completed: "completed",
} as const;

export type TodoStatusT = (typeof TODO_STATUS)[keyof typeof TODO_STATUS];
