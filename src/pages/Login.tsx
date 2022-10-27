import React, { FormEvent } from "react";
import FormField from "@/components/FormField";
import useInputValidation from "@/hooks/useInputValidation";
import validate from "@/utils/validate";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePaths";

const LogIn = () => {
  const { results, isAllPass, eventHandler } = useInputValidation({
    names: ["email", "password"],
    validate,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(values);
    // TODO
    // 여기서 api 요청을 한다.
  };

  return (
    <FormContainer>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일"
          onBlur={eventHandler}
          errorText={results.email.isError ? results.email.errorMsg : ""}
        />
        <FormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          onBlur={eventHandler}
          errorText={results.password.isError ? results.password.errorMsg : ""}
        />
        <button type="submit" disabled={!isAllPass}>
          로그인
        </button>
      </form>
      <Link to={ROUTE_PATH.SIGN_UP}>회원가입</Link>
    </FormContainer>
  );
};

export default LogIn;

const FormContainer = styled.div`
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
