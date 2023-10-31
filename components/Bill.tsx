import React from "react";
import { Button, Select, Input } from "@/components";
import "./Bill.css";

const Bill = () => {
  const selcetItems = [
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
  return (
    <div className="bill">
      <div className="bill-category">
        <h3>TITLE</h3>
      </div>
      <div className="bill-type">
        <Button btnText="자급제" />
        <Button btnText="자급제" />
      </div>
      <div className="bill-device">
        <div className="bill-device-selectbox">
          <span className="my-auto">기기</span>
          <span>
            <Select options={selcetItems} customWidth="w-64" />
          </span>
        </div>
        <div className="bill-device-price">
          <span>출시가격</span>
          <span>9,999,999 원</span>
        </div>
      </div>

      <hr className="hr-dashed" />
      <hr className="hr-dashed" />
      <div className="bill-sale ">
        <h5>할인정보</h5>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-title">
        <span>할인 종류</span>
        <span>할인 비율 / 품목</span>
        <span>할인 금액</span>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-detail">
        <div className="bill-sale-detail-items">
          <Select options={selcetItems} />
          <Input inputWidth="w-20" />
          <span className="my-auto">999,999원</span>
        </div>
        <div>
          <Button
            btnText="할인정보 추가"
            btnWidth="w-full"
            btnCustomClass="mt-1 mb-3"
          />
        </div>
      </div>

      <hr className="hr-dashed" />
      <div className="bill-total">
        <div className="bill-sale-total">
          <span>총 할인금액</span>
          <span className="text-red-400 font-bold">- 9,999,999 원</span>
        </div>
        <div className="bill-total-price">
          <span>최종 구매가</span>
          <span>9,999,999 원</span>
        </div>
      </div>

      <p className="bill-shadow-text">
        * 본 계산은 참고용임으로 실제 계산과 다를 수 있습니다.
      </p>
    </div>
  );
};

export default Bill;
