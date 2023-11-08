import { Sale } from "@/types";
export const initSale: Sale = {
  saleItem: {
    key: 0,
    value: null,
    name: null,
  },
  saleLate: 0,
  salePrice: 0,
};
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

export const saleItems = [
  {
    key: 1,
    value: "card",
    name: "카드",
  },
  {
    key: 2,
    value: "coupon",
    name: "쿠폰",
  },
  {
    key: 3,
    value: "giftItem",
    name: "사은품",
  },
];
