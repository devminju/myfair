import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoUserListPage from "@pages/TodoUserListPage";
import { RecoilRoot } from "recoil";

function renderTodoList() {
  const page = render(
    <RecoilRoot>
      <TodoUserListPage />
    </RecoilRoot>
  );
  // DOM 요소 접근 함수
  const title = () => page.getByText(/To Do List/i);
  const input = () =>
    page.container.querySelector('input[type="text"]') as HTMLInputElement;
  const allButton = () => page.getByRole("button", { name: /All/i });
  const todoButton = () => page.getByRole("button", { name: /To Do/i });
  const doneButton = () => page.getByRole("button", { name: /Done/i });
  const firstCheckbox = () =>
    page.container.querySelectorAll(
      'input[type="checkbox"]'
    )[0] as HTMLInputElement;

  const secondCheckbox = () =>
    page.container.querySelectorAll(
      'input[type="checkbox"]'
    )[1] as HTMLInputElement;

  const firstDeleteButton = () =>
    page.container.querySelectorAll('[alt="delete"]')[0] as HTMLImageElement;

  const secondDeleteButton = () =>
    page.container.querySelectorAll('[alt="delete"]')[0] as HTMLImageElement;

  return {
    title,
    input,
    allButton,
    todoButton,
    doneButton,
    firstCheckbox,
    secondCheckbox,
    firstDeleteButton,
    secondDeleteButton,
  };
}

describe("Todo List", () => {
  it("기본 요소 렌더링.", async () => {
    const { title, input, allButton, todoButton, doneButton } =
      renderTodoList();
    expect(title()).toBeInTheDocument();
    expect(input()).toBeInTheDocument();
    expect(allButton()).toBeInTheDocument();
    expect(todoButton()).toBeInTheDocument();
    expect(doneButton()).toBeInTheDocument();
  });

  it("할 일 추가.", async () => {
    const { input } = renderTodoList();
    fireEvent.change(input(), { target: { value: "퇴근하기" } });
    fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    expect(screen.getByText("퇴근하기")).toBeInTheDocument();
    expect(screen.getByText(/총 1 개/)).toBeInTheDocument();
  });

  it("할 일 완료.", async () => {
    const { input, firstCheckbox } = renderTodoList();
    fireEvent.change(input(), { target: { value: "퇴근하기" } });
    fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    fireEvent.click(firstCheckbox());
    expect(firstCheckbox().checked).toBe(true);
  });

  it("할 일 삭제.", async () => {
    const { input, firstDeleteButton } = renderTodoList();
    fireEvent.change(input(), { target: { value: "퇴근하기" } });
    fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    fireEvent.click(firstDeleteButton());
    expect(screen.queryByText("퇴근하기")).not.toBeInTheDocument();
    expect(screen.getByText(/총 0 개/)).toBeInTheDocument();
  });

  it("할 일 필터링.", async () => {
    const { input, todoButton, doneButton, firstCheckbox, secondCheckbox } =
      renderTodoList();
    fireEvent.change(input(), { target: { value: "퇴근하기" } });
    fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    fireEvent.change(input(), { target: { value: "저녁먹기" } });
    fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    expect(screen.getByText(/총 2 개/)).toBeInTheDocument();

    // todo 항목만 보기
    fireEvent.click(firstCheckbox());
    fireEvent.click(todoButton());
    expect(screen.getByText(/총 1 개/)).toBeInTheDocument();

    // done 항목만 보기
    fireEvent.click(secondCheckbox());
    fireEvent.click(doneButton());
    expect(screen.getByText(/총 2 개/)).toBeInTheDocument();
  });

  it("20글자 이상 입력 시 에러 메시지 출력.", async () => {
    const { input } = renderTodoList();
    fireEvent.change(input(), {
      target: { value: "20글자 이상 입력 시 에러 메시지 출력." },
    });
    expect(screen.getByText(/20자 이하로 입력해 주세요./)).toBeInTheDocument();
  });

  it("10개 이상의 할 일 추가 시 에러 메시지 출력.", async () => {
    const { input } = renderTodoList();
    for (let i = 0; i < 10; i++) {
      fireEvent.change(input(), { target: { value: `할 일 ${i}` } });
      fireEvent.keyDown(input(), { key: "Enter", code: "Enter" });
    }
    expect(
      screen.getByText(
        /To Do 항목은 10개까지만 추가할 수 있습니다. 완료된 항목을 선택해 Done 항목으로 이동시키세요./
      )
    ).toBeInTheDocument();
  });
});
