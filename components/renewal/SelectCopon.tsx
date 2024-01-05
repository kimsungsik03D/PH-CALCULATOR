"use client";

import { SelectCoponProps, Sale2 } from "@/types";
import dynamic from "next/dynamic";
import { ChangeEvent } from "react";
const Input = dynamic(() => import("@/components/Input"), {
  ssr: true,
  loading: () => null,
});

const SelectCopon = ({ pageUp, setData }: SelectCoponProps) => {
  let data: Sale2 = { saleInfo: "", salePrice: 0 };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      data[e.target.name] = e.target.value;
    }
  };
  const onBtnClick = () => {
    const salePrice = data.salePrice.toString();
    data.salePrice = salePrice.replaceAll(",", "");

    setData({ sale: data });
    pageUp(6);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-12 mb-9">
        <Input
          name="saleInfo"
          id="saleInfo"
          className="pl-3"
          placeholder="할인 항목"
          onChange={handleChangeInput}
        />
      </div>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-5 mb-9">
        <Input
          name="salePrice"
          id="salePrice"
          type="current"
          className="pr-3"
          placeholder="할인 금액을 입력해주세요."
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex justify-between w-11/12 mt-20">
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
          {/* {type === "sale" ? "계산하기" : "다음"} */}
          계산하기
        </button>
      </div>
    </div>
  );
};

export default SelectCopon;
