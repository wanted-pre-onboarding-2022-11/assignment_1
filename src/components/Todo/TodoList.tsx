import { ITodo } from "@/types";
import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  onDeleteTodo: (todoId: number) => void;
  onToggleTodo: (todo: ITodo) => void;
  onEditTodo: (todo: ITodo) => void;
}

const TodoList = ({ todos, onDeleteTodo, onToggleTodo, onEditTodo }: TodoListProps) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.ul`
  margin: 0;
  padding: 0;
`;
