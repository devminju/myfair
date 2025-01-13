import { useRecoilState } from "recoil";
import { todoListFilterState } from "@recoil/todo";
import styled from "@emotion/styled";
import Badge from "@components/Badge";
import { TodoStatusT, TODO_STATUS } from "@definitions/todo";

const filters: TodoStatusT[] = Object.values(TODO_STATUS) as TodoStatusT[];

const TODO_STATUS_TITLE: Record<TodoStatusT, string> = {
  all: "ALL",
  uncompleted: "To Do",
  completed: "Done",
};

export default function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const onChange = (key: TodoStatusT): void => {
    setFilter(key);
  };
  return (
    <Container>
      {filters.map((el: TodoStatusT) => (
        <Badge
          key={el}
          clickHandler={() => onChange(el)}
          title={TODO_STATUS_TITLE[el]}
          selected={filter === el}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
