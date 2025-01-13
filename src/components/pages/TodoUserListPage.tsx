"use client";
import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import TodoCreator from "@features/todo/TodoCreator";
import TodoList from "@features/todo/TodoList";

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            background-color: #f5f5f5;
          }
        `}
      />
      <div>
        <Title>To Do List</Title>
        <TodoCreator />

        <TodoList />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
`;

export default TodoUserListPage;
