import React, { FormEvent } from "react";
import FormField from "@/components/FormField";
import useInputValidation from "@/hooks/useInputValidation";
import validate from "@/utils/validate";
import FormContainer from "@/components/FormContainer";
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
