import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { ITodo } from "@/types";

interface TodoItemProps {
  todo: ITodo;
  onDeleteTodo: (todoId: number) => void;
  onToggleTodo: (todo: ITodo) => void;
  onEditTodo: (todo: ITodo) => void;
}

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }: TodoItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(todo.todo);
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEditValue = (e: FormEvent) => {
    e.preventDefault();
    onEditTodo({ ...todo, todo: value });
    setIsEditMode(false);
  };

  return (
    <Container>
      {!isEditMode ? (
        <>
          <button type="button" onClick={() => onToggleTodo(todo)}>
            완료
          </button>
          <Title todo={todo}>{todo.todo}</Title>
          <button type="button" onClick={() => setIsEditMode(true)}>
            수정
          </button>
          <button type="button" onClick={() => onDeleteTodo(todo.id)}>
            삭제
          </button>
        </>
      ) : (
        <form onSubmit={handleEditValue}>
          <input value={value} onChange={handleChangeValue} />
          <button type="submit">변경</button>
          <button type="button" onClick={() => setIsEditMode(false)}>
            취소
          </button>
        </form>
      )}
    </Container>
  );
};

export default TodoItem;

const Container = styled.li`
  margin-bottom: 24px;
  display: flex;
  list-style: none;
  text-decoration: none;
`;

const Title = styled.span<Pick<TodoItemProps, "todo">>`
  font-size: 16px;
  font-weight: 500;
  text-decoration: ${({ todo }) => (todo.isCompleted ? "line-through" : "none")};
  flex: 1;
`;
