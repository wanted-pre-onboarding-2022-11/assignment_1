import React, { FormEvent } from "react";
import useInputValidation from "@/hooks/useInputValidation";
import validate from "@/utils/validate";
import { Link, useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePaths";
import { accountAPI } from "@/apis";
import { saveAccessToken } from "@/utils/localStorage";
import { FormContainer, FormField } from "@/components/Form";

const LogIn = () => {
  const navigate = useNavigate();
  const { values, validationResults, isAllPass, handleEvent } = useInputValidation({
    names: ["email", "password"],
    validate,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await accountAPI.postLogin({
        email: values.email,
        password: values.password,
      });
      saveAccessToken(response.access_token);
      navigate(ROUTE_PATH.TODO_LIST, {
        replace: true,
      });
    } catch (e) {
      alert("아이디 비밀번호를 확인해주세요");
    }
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
          onBlur={handleEvent}
          errorText={validationResults.email.isError ? validationResults.email.errorMsg : ""}
        />
        <FormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          onBlur={handleEvent}
          errorText={validationResults.password.isError ? validationResults.password.errorMsg : ""}
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
