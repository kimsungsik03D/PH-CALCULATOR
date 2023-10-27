"use client";
import { InputProps } from "@/types";
import { ChangeEvent, useState, useRef } from "react";
import "./style.css";

const Input = ({ label, labelClass, onValue, ...props }: InputProps) => {
  const [enteredNum, setEnterdNum] = useState<string>("");

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
    const value: string = e.target.value
      .replace(/^0+|\D+/g, "")
      .replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

    const startPosition =
      e.target?.selectionEnd && e.target.value.length - e.target?.selectionEnd;

    setEnterdNum(value);

    const len = Math.max(e.target.value.length - (startPosition || 0), 0);
    if (e.target.value.length != e.target?.selectionEnd) {
      setTimeout(() => {
        e.target?.setSelectionRange(len, len);
      }, 0); // 1초
    }
  };

  return (
    <>
      <label className={`${labelClass}`}>
        {label}
        <input
          className={`custom-input ${
            props.type == "current" ? "text-right" : ""
          }`}
          type={props.type && "text"}
          {...props}
          value={enteredNum}
          onInput={changeEnteredNum}
          onChange={onValue}
        />
      </label>
    </>
  );
};

export default Input;
