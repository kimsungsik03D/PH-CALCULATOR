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
  btnSize?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  inputWidth?: string;
  max?: number;
  maxMessage?: string;
  onValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onValue?: (enteredNum: string) => void;
}

export interface SelcetBoxProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  select?: SelcetBox | null;
  customWidth?: string;
  options?: Array<SelcetBox>;
  onselect: (e: SelcetBox) => void;
}
export interface SelcetBox {
  key: number;
  name: string | null;
  placeholder?: string | null;
  value?: string | null;
  price?: number;
}
export interface Sale {
  saleItem: SelcetBox;
  saleLate: string | number;
  salePrice: string | number;
}

export interface Device {
  key: string;
  name: string;
  price: number;
}
export interface Payment {
  key: string;
  name: string;
}
export interface PaymentSaleLate {
  key: number;
  late: string;
}
