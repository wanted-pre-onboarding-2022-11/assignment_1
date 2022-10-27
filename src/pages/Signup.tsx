import React, { FormEvent } from "react";
import useInputValidation from "@/hooks/useInputValidation";
import FormField from "@/components/FormField";
import validate from "@/utils/validate";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePaths";

const SignUp = () => {
  const { results, isAllPass, eventHandler } = useInputValidation({
    names: ["email", "password", "checkPassword"],
    validate,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO
    // 여기서 회원가입 요청을 한다.
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <form>
        <h1>회원가입</h1>
        <FormField
          type="email"
          name="email"
          label="이메일 *"
          placeholder="이메일을 입력해주세요"
          onBlur={eventHandler}
          errorText={results.email.isError ? results.email.errorMsg : ""}
        />
        <FormField
          type="password"
          name="password"
          label="비밀번호 *"
          placeholder="8자 이상의 비밀번호를 입력해주세요"
          onBlur={eventHandler}
          errorText={results.password.isError ? results.password.errorMsg : ""}
        />
        <FormField
          type="password"
          name="checkPassword"
          label="비밀번호 확인 *"
          placeholder="비밀번호를 다시 입력해주세요"
          onBlur={eventHandler}
          errorText={results.checkPassword.isError ? results.checkPassword.errorMsg : ""}
        />
        <button type="submit" disabled={!isAllPass}>
          회원가입
        </button>
      </form>
      <Link to={ROUTE_PATH.BASE}>로그인</Link>
    </FormContainer>
  );
};

export default SignUp;

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
