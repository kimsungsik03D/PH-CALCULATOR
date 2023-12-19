import { Sale, Device, Payment, PaymentSaleLate } from "@/types";
/** Sale 초기화 값 */
export const initSaleArry: Sale[] = [
  {
    saleItem: {
      key: 0,
      value: "card",
      name: "카드",
      placeholder: "카드 명",
    },
    saleLate: "",
    salePrice: "",
  },
  // {
  //   saleItem: {
  //     key: 1,
  //     value: "coupon",
  //     name: "쿠폰",
  //     placeholder: "쿠폰 명",
  //   },
  //   saleLate: 0,
  //   salePrice: 0,
  // },
];

/** Sale 초기화 값 */
export const initSale: Sale = {
  saleItem: {
    key: 0,
    value: null,
    name: null,
    placeholder: null,
  },
  saleLate: 0,
  salePrice: 0,
};

/** 기기 초기 리스트
 * TODO : DB관리 예정
 */
export const deviceList = [
  {
    key: 1,
    name: "IPhone15 pro max",
    value: "IPhone15PM",
    price: 1900000,
  },
  {
    key: 2,
    name: "IPhone15 pro",
    value: "IPhone15P",
    price: 1500000,
  },
];

/** 할인 종류 */
export const saleItems = [
  {
    key: 3,
    value: "giftItem",
    name: "사은품",
    placeholder: "사은품 명",
  },
  {
    key: 4,
    value: "cash",
    name: "할인금액",
    placeholder: "할인금액",
  },
  {
    key: 5,
    value: "etc",
    name: "기타",
    placeholder: "기타",
  },
];

export const title: string[] = [
  "기기를 고르세요.",
  "카드할인 정보가 있나요?",
  "카드 할인 정보를 입력해주세요",
  "추가 할인 정보가 있나요?",
  "추가 할인 정보를 입력해주세요.",
  "영수증",
];

export const device: Device[] = [
  { key: "ip15128", name: "IPhone 15 128GB", price: 1250000 },
  { key: "ip15256", name: "IPhone 15 256GB", price: 1400000 },
  { key: "ip15512", name: "IPhone 15 512GB", price: 1700000 },
  { key: "ip15pl128", name: "IPhone 15 plus 128GB", price: 1350000 },
  { key: "ip15pl256", name: "IPhone 15 plus 256GB", price: 1500000 },
  { key: "ip15pl512", name: "IPhone 15 plus 512GB", price: 1800000 },
  { key: "ip15pr128", name: "IPhone 15 Pro 128GB", price: 1550000 },
  { key: "ip15pr256", name: "IPhone 15 Pro 256GB", price: 1700000 },
  { key: "ip15pr512", name: "IPhone 15 Pro 512GB", price: 2000000 },
  { key: "ip15p1000", name: "IPhone 15 Pro 1TB", price: 2300000 },
  { key: "ip15pm256", name: "IPhone 15 Pro max 256GB", price: 1900000 },
  { key: "ip15pm512", name: "IPhone 15 Pro max 512GB", price: 2200000 },
  { key: "ip15pm1000", name: "IPhone 15 Pro max 1TB", price: 2500000 },
];

export const payment: Payment[] = [
  { key: "samsung", name: "삼성카드" },
  { key: "kokmin", name: "국민카드" },
  { key: "uri", name: "우리카드" },
  { key: "hyundai", name: "현대" },
  { key: "lotte", name: "롯데" },
  { key: "toss", name: "토스" },
  { key: "hana", name: "하나" },
  { key: "bc", name: "비씨" },
  { key: "nonghyup", name: "농협" },
  { key: "kakaobank", name: "카카오뱅크" },
  { key: "kbank", name: "케이뱅크" },
  { key: "kiup", name: "기업" },
  { key: "master", name: "마스터" },
];

export const paymentSaleLate: PaymentSaleLate[] = [
  { key: 1, late: 1, lateName: "1%" },
  { key: 2, late: 2, lateName: "2%" },
  { key: 3, late: 3, lateName: "3%" },
  { key: 4, late: 4, lateName: "4%" },
  { key: 5, late: 5, lateName: "5%" },
  { key: 6, late: 6, lateName: "6%" },
  { key: 7, late: 7, lateName: "7%" },
  { key: 8, late: 8, lateName: "8%" },
  { key: 9, late: 9, lateName: "9%" },
  { key: 10, late: 10, lateName: "10%" },
  { key: 11, late: 11, lateName: "11%" },
  { key: 12, late: 12, lateName: "12%" },
  { key: 13, late: 13, lateName: "13%" },
  { key: 14, late: 14, lateName: "14%" },
  { key: 15, late: 15, lateName: "15%" },
  { key: 16, late: 16, lateName: "16%" },
  { key: 17, late: 17, lateName: "17%" },
  { key: 18, late: 18, lateName: "18%" },
  { key: 19, late: 19, lateName: "19%" },
  { key: 20, late: 20, lateName: "20%" },
  { key: 21, late: 21, lateName: "21%" },
  { key: 22, late: 22, lateName: "22%" },
  { key: 23, late: 23, lateName: "23%" },
  { key: 24, late: 24, lateName: "24%" },
  { key: 25, late: 25, lateName: "25%" },
  { key: 26, late: 26, lateName: "26%" },
  { key: 27, late: 27, lateName: "27%" },
  { key: 28, late: 28, lateName: "28%" },
  { key: 29, late: 29, lateName: "29%" },
  { key: 30, late: 30, lateName: "30%" },
].reverse();

export const resultData = {
  device: {
    key: "ip15128",
    name: "IPhone 15 128GB",
    price: 1250000,
  },
  payment: {
    key: 30,
    name: "삼성카드",
    late: 30,
    lateName: "30%",
  },
  sale: {
    saleInfo: "사은품",
    salePrice: "10000000",
  },
};
