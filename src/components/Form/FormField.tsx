import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface FormFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

const FormField = ({ label, errorText, ...props }: FormFieldProp) => {
  return (
    <Field>
      <label htmlFor={props.name}>{label}</label>
      <input autoComplete="off" {...props} />
      {errorText && <ErrorText>errorText</ErrorText>}
    </Field>
  );
};

export default FormField;

export const Field = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 8px;
  gap: 4px;

  label {
    font-size: 18px;
    font-weight: 600;
  }

  input {
    height: 20px;
  }
`;

export const ErrorText = styled.div`
  color: tomato;
`;
