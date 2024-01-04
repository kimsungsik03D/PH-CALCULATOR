"use client";
import { InputProps } from "@/types";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import "./style.css";

const Input = ({
  label,
  labelClass,
  inputWidth,
  maxMessage,
  onChange,
  ...props
}: InputProps) => {
  const [enteredNum, setEnterdNum] = useState<
    string | number | readonly string[] | undefined
  >("");
  const input = useRef(null);

  useEffect(() => {
    setEnterdNum(props.value);
  }, [props.value]);

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

    // setEnterdNum(repValue);
    e.target.value = repValue;

    let cursorPoint = Math.max(value.length - (startPosition || 0), 0);

    if (value.length != selectionEnd) {
      console.log("@");
      setTimeout(() => {
        if (selectionEnd == 0) {
          cursorPoint = 1;
        }
        e.target.setSelectionRange(cursorPoint, cursorPoint);
      }, 0); // 1초
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <label className={`${labelClass}`}>
        {label}
        <input
          ref={input}
          className={`custom-input ${inputWidth ? inputWidth : ""} ${
            props.type == "current" ? "text-right" : ""
          }
        `}
          type={props.type && "text"}
          {...props}
          value={props.value}
          onInput={changeEnteredNum}
        />
      </label>
    </>
  );
};

export default Input;
