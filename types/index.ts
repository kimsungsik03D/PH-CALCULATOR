import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ChangeEvent,
  SelectHTMLAttributes,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  btnWidth?: string;
  btnHeigth?: string;
  btnColor?: string;
  btnCustomClass?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  inputWidth?: string;
  onValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onValue?: (enteredNum: string) => void;
}

export interface SelcetBoxProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  customWidth?: string;
  options?: Array<SelcetBox>;
}
interface SelcetBox {
  key: number;
  name: string;
}
