import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { ITodo } from "@/types";

interface TodoItemProps {
  todoItem: ITodo;
  onDeleteTodo: (todoId: number) => void;
  onToggleTodo: (todo: ITodo) => void;
  onEditTodo: (todo: ITodo) => void;
}

const TodoItem = ({ todoItem, onDeleteTodo, onToggleTodo, onEditTodo }: TodoItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(todoItem.todo);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    onEditTodo({ ...todoItem, todo: value });
    setIsEditMode(false);
  };

  return (
    <Container>
      {!isEditMode ? (
        <>
          <button type="button" onClick={() => onToggleTodo(todoItem)}>
            완료
          </button>
          <Title todoItem={todoItem}>{todoItem.todo}</Title>
          <button type="button" onClick={() => setIsEditMode(true)}>
            수정
          </button>
          <button type="button" onClick={() => onDeleteTodo(todoItem.id)}>
            삭제
          </button>
        </>
      ) : (
        <form onSubmit={handleEdit}>
          <input value={value} onChange={handleChange} />
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

const Title = styled.span<Pick<TodoItemProps, "todoItem">>`
  font-size: 16px;
  font-weight: 500;
  text-decoration: ${({ todoItem }) => (todoItem.isCompleted ? "line-through" : "none")};
  flex: 1;
`;
