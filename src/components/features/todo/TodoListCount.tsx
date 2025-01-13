import { useRecoilValue } from "recoil";
import { todoListFilterState, todoListStatsState } from "@recoil/todo";
import styled from "@emotion/styled";
import { TODO_STATUS } from "@definitions/todo";

export default function TodoListCount() {
  const count = useRecoilValue(todoListStatsState);
  const filter = useRecoilValue(todoListFilterState);

  return (
    <Container>
      {filter === TODO_STATUS.completed && (
        <span>총 {count.totalCompletedNum} 개</span>
      )}

      {filter === TODO_STATUS.uncompleted && (
        <span>총 {count.totalUnCompletedNum} 개</span>
      )}

      {filter === TODO_STATUS.all && <span>총 {count.totalNum} 개</span>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
