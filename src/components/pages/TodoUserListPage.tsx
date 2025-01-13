"use client";
import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

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
          }
        `}
      />
      <div>
        <Title>To Do List</Title>
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
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  fotn-size: 56px;
  font-weight: 700;
`;

export default TodoUserListPage;
