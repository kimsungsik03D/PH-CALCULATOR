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
  late: number;
  lateName: string;
}

//
export interface CommonProps {
  pageUp: (nextPage: number) => void;

  type?: string;
}
export interface SelectDeviceProps extends CommonProps {
  setData: (data: any) => void;
  deviceList: Device[];
}

export interface SelectPaymentProps extends CommonProps {
  setData: (data: any) => void;
  paymentList: Payment[];
}
export interface SelectCoponProps extends CommonProps {
  setData: (data: any) => void;
}
export interface ResultProps {
  data: ResultType;
}
export interface YesOrNoProps extends CommonProps {}

export interface ResultType {
  device: Device;
  payment: Payment;
  sale: Sale2;
}

export interface Device {
  key: string;
  name: string;
  price: number;
  url: string;
}
export interface Payment {
  [key: string]: string | number | undefined;
  name: string;
  late?: number;
  lateName?: string;
  price?: number;
}
export interface Sale2 {
  [key: string]: string | number;
  saleInfo: string;
  salePrice: string | number;
}

export interface TransitionStylesType {
  [key: string]: { opacity: number };
  entering: { opacity: number };
  entered: { opacity: number };
  exiting: { opacity: number };
  exited: { opacity: number };
}
export interface DefaultStyle {
  transition: string;
  opacity: number;
}
