import ROUTE_PATH from "@/routes/routePaths";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface FormContainerProps {
  type: "login" | "signup";
  children: React.ReactNode;
}

const FormContainer = ({ type, children }: FormContainerProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>{type === "login" ? "로그인" : "회원가입"}</h1>
      {children}
      <footer>
        {type === "login" ? (
          <button type="button" onClick={() => navigate(`${ROUTE_PATH.SIGN_UP}`)}>
            회원가입
          </button>
        ) : (
          <button type="button" onClick={() => navigate(`${ROUTE_PATH.LOG_IN}`)}>
            로그인
          </button>
        )}
      </footer>
    </Container>
  );
};

export default FormContainer;

const Container = styled.div`
  width: 400px;
  border: 3px solid gray;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 4px 8px;
    font-size: 16px;
    margin: 10px 0 20px;
  }
`;
