import React, { FormEvent } from "react";
import useInputValidation from "@/hooks/useInputValidation";
import FormField from "@/components/FormField";
import validate from "@/utils/validate";
import { Link, useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePaths";
import FormContainer from "@/components/FormContainer";
import { accountAPI } from "@/apis";
import { saveAccessToken } from "@/utils/localStorage";

const SignUp = () => {
  const navigate = useNavigate();
  const { values, results, isAllPass, eventHandler } = useInputValidation({
    names: ["email", "password", "checkPassword"],
    validate,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await accountAPI.postSignUp(values as { email: string; password: string });
      saveAccessToken(res.access_token);
      navigate(ROUTE_PATH.TODO_LIST, {
        replace: true,
      });
    } catch (e) {
      alert("중복된 이메일입니다.");
    }
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
          onBlur={(e) => eventHandler(e, values.password)}
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
