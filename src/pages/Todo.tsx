import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { ITodo } from "@/types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { todoAPI } from "@/apis";
import ROUTE_PATH from "@/routes/routePaths";
import { handleAxiosError } from "@/utils/axiosHandlers";

const Todo = () => {
  const navigate = useNavigate();
  const redirectLoginPage = () => navigate(ROUTE_PATH.BASE);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCreateTodo = async (todo: string) => {
    try {
      const newTodo = await todoAPI.addTodo(todo);
      setTodos((prev) => [...prev, newTodo]);
    } catch (e) {
      handleAxiosError(e, redirectLoginPage);
    }
  };

  const handleDeleteTodo = async (todoId: number) => {
    try {
      const nextTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(nextTodos);
      await todoAPI.deleteTodo(todoId);
    } catch (e) {
      handleAxiosError(e, redirectLoginPage);
    }
  };

  const handleToggleTodo = async (toggledTodo: ITodo) => {
    try {
      const nextTodos = todos.map((todo) => {
        if (todo.id === toggledTodo.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      setTodos(nextTodos);
      // todoManager.toggleTodo(toggledTodo);
    } catch (e) {
      handleAxiosError(e, redirectLoginPage);
    }
  };

  const handleEditTodo = async (edittedTodo: ITodo) => {
    try {
      const nextTodos = todos.map((todo) => {
        if (todo.id === edittedTodo.id) {
          return { ...todo, todo: edittedTodo.todo };
        }
        return todo;
      });
      setTodos(nextTodos);
      await todoAPI.updateTodo(edittedTodo.id, {
        todo: edittedTodo.todo,
        isCompleted: edittedTodo.isCompleted,
      });
    } catch (e) {
      handleAxiosError(e, redirectLoginPage);
    }
  };

  useEffect(() => {
    todoAPI.getTodos().then((res) => setTodos(res));
  }, []);

  return (
    <>
      <Header>
        <h1>🍀 프리온보딩 11조 첫번째 과제 🍀</h1>
      </Header>
      <Main>
        <Wrapper>
          <TodoForm style={{ marginBottom: "16px" }} onCreateTodo={handleCreateTodo} />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
          />
        </Wrapper>
      </Main>
    </>
  );
};

export default Todo;

const Header = styled.header`
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  border: 3px solid gray;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 568px;
  padding: 24px;
`;
