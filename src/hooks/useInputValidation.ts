import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { ValidateFC, ValidationResult } from "@/utils/validate";

interface InputValidationParam {
  names: string[];
  validate: ValidateFC;
}

type InputValue = {
  [name: string]: string;
};

type ValidationResults = {
  [name: string]: ValidationResult;
};

type InputEvent = ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;

const getInitialValues = (names: string[]): [InputValue, ValidationResults] =>
  names.reduce(
    ([values, results], name) => [
      { ...values, [name]: "" },
      { ...results, [name]: { isPass: false, isError: false, errorMsg: "" } },
    ],
    [{}, {}],
  );

const useInputValidation = ({ names, validate }: InputValidationParam) => {
  const [initValues, initResults] = getInitialValues(names);
  const [values, setValues] = useState(initValues);
  const [validationResults, setValidationResults] = useState(initResults);
  const [isAllPass, setAllPass] = useState(false);

  const eventHandler = ({ target }: InputEvent, payload?: any) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setValidationResults({ ...validationResults, [name]: validate(name, value, payload) });
  };

  useEffect(() => {
    setAllPass(names.reduce((acc, name) => acc && validationResults[name].isPass, true));
  }, [validationResults]);

  return { values, setValues, validationResults, isAllPass, eventHandler };
};

export default useInputValidation;
