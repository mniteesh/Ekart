import { useState } from "react";

const useInput = (validateValue) => {
  const [enterdValue, setEnterdVlue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterdValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterdVlue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () =>{
      setEnterdVlue('');
      setIsTouched(false);
  }

  return {
    value: enterdValue,
    isValid:valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
