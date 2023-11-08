import { Sale } from "@/types";
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
    key: 1,
    value: "card",
    name: "카드",
    placeholder: "카드 명",
  },
  {
    key: 2,
    value: "coupon",
    name: "쿠폰",
    placeholder: "쿠폰 명",
  },
  {
    key: 3,
    value: "giftItem",
    name: "사은품",
    placeholder: "사은품 명",
  },
  {
    key: 4,
    value: "etc",
    name: "기타",
    placeholder: "기타",
  },
];
