"use client";
import { InputProps } from "@/types";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import "./style.css";

const Input = ({
  label,
  labelClass,
  inputWidth,
  maxMessage,
  value,
  onChange,
  ...props
}: InputProps) => {
  const [enteredNum, setEnterdNum] = useState(value);

  useEffect(() => {
    setEnterdNum(value);
  }, [value]);

  // onInput Func
  const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.type == "current") {
      onChangeEnteredCurrency(e);
    } else {
      onChangeEnteredText(e);
    }
  };

  // other Input Change handler
  const onChangeEnteredText = (e: ChangeEvent<HTMLInputElement>) => {
    setEnterdNum(e.target.value);
  };

  // only Current Input Change handler
  const onChangeEnteredCurrency = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionEnd, setSelectionRange } = e.target;
    const { max } = props;
    if (max && max < Number(value)) {
      alert(maxMessage);
      setEnterdNum(enteredNum);
      return;
    }
    const repValue: string = value
      .replace(/^0+|\D+/g, "")
      .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

    const startPosition = selectionEnd && value.length - selectionEnd;
    setEnterdNum(repValue);

    const len = Math.max(value.length - (startPosition || 0), 0);
    // if (value.lengt

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <label className={`${labelClass}`}>
        {label}
        <input
          className={`custom-input ${inputWidth ? inputWidth : ""} ${
            props.type == "current" ? "text-right" : ""
          }
        `}
          type={props.type && "text"}
          {...props}
          value={enteredNum}
          onInput={changeEnteredNum}
        />
      </label>
    </>
  );
};

export default Input;
