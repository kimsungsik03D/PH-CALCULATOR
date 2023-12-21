"use client";
import { ChangeEvent, useEffect } from "react";

import { payment, paymentSaleLate } from "@/constants";
import { SelectPaymentProps, Payment } from "@/types";
import { handleSelectFindObject } from "@/common";

const SelectPayment = ({
  pageUp,
  setData,
  paymentList,
}: SelectPaymentProps) => {
  let paymentData: any = { ...paymentList[0], ...paymentSaleLate[0] };
  // useEffect(() => {
  //   setData({ payment: paymentData });
  // }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    const data = handleSelectFindObject(
      targetValue,
      targetName === "paymentName" ? paymentList : paymentSaleLate
    );
    paymentData = { ...paymentData, ...data };
  };

  const onBtnClick = () => {
    setData({ payment: paymentData });
    pageUp(4);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-9 mb-9">
        <select
          name="paymentName"
          id="paymentName"
          className="w-full h-full text-center rounded-lg"
          onChange={handleChange}
        >
          {paymentList.map((value, index) => (
            <option key={index} value={value.key}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mb-9">
        <select
          name="paymentLate"
          id="paymentLate"
          className="w-full h-full text-center rounded-lg"
          onChange={handleChange}
        >
          {paymentSaleLate.map((value, index) => (
            <option key={index} value={value.key}>
              {value.late}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between w-11/12 mt-24">
        <p className="flex text-xs my-auto">
          찾는 카드사가 없나요?&nbsp;{" "}
          <a className="text-bold text-[#1A73E8] font-black">
            여기를 눌러 추가하세요.
          </a>
        </p>
        <button
          className="bg-[#1A73E8] text-white px-[20px] py-[8px] rounded-lg"
          onClick={onBtnClick}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SelectPayment;
