"use client";

import { useState } from "react";
import QuestionLottie from "./Lottie";
import { device, payment, paymentSaleLate } from "@/constants";

interface CommonProps {
  pageUp: (nextPage: number) => void;
  type?: string;
}
interface SelectDeviceProps extends CommonProps {}

interface SelectPaymentProps extends CommonProps {}
interface SelectCoponProps extends CommonProps {}
interface ResultProps extends CommonProps {}
interface YesOrNoProps extends CommonProps {}

const title: string[] = [
  "기기를 고르세요.",
  "카드할인 정보가 있나요?",
  "카드 할인 정보를 입력해주세요",
  "추가 할인 정보가 있나요?",
  "추가 할인 정보를 입력해주세요.",
  "영수증",
];

const Result = ({ pageUp }: ResultProps) => {
  return (
    <>
      <hr className=" w-full border-black mt-3" />
      <div className="my-3 w-full">
        <div className="flex justify-around text-base">
          <span className="w-24 text-center">기기</span>
          <span className="w-24 text-right">금액</span>
        </div>
        <div className="my-2 flex justify-around w-full">
          <span className="w-36 text-center">IPhone 15pro 256gb</span>
          <span className="w-24 text-right">9,000,000원</span>
        </div>
      </div>
      <hr className=" w-full border-black mt-1 mb-5" />
      <hr className=" w-full border-black mt-1" />
      <div className="my-4 w-full">
        <div className="flex justify-around text-base">
          <span className="w-24 text-center">할인정보</span>
          <span className="w-24 text-right">할인금액</span>
        </div>
        <div className="my-5 flex justify-around w-full">
          <span className="w-24 text-center">삼성카드</span>
          <span className="w-24 text-right">-1,000,000원</span>
        </div>
        <div className="mt-5 flex justify-around w-full">
          <span className="w-24 text-center">사은품</span>
          <span className="w-24 text-right">-1,000,000원</span>
        </div>
      </div>
      <hr className=" w-full border-black mt-1" />
      <div className="flex flex-col items-end w-full  my-7">
        <div className="flex">
          <div>할인총액 : </div>
          <div className="w-24 text-right">-1,000,000원</div>
        </div>
        <div className="flex">
          <div>최종금액 : </div>
          <div className="w-24 text-right">1,000,000원</div>
        </div>
      </div>
    </>
  );
};

const YesOrNo = ({ type = "", pageUp }: YesOrNoProps) => {
  const handlePageup = (page: number) => {
    let dynamicPage = 0;
    if (type === "sale") {
      dynamicPage = 2;
    }
    pageUp(page + dynamicPage);
  };
  return (
    <div className="flex justify-between w-9/12 mt-28 text-white">
      <div
        className="bg-[#1A73E8] py-[35px] px-[43px] text-center rounded-2xl"
        onClick={() => handlePageup(3)}
      >
        예
      </div>
      <div
        className="bg-[#1A73E8] p-[35px] text-center rounded-2xl"
        onClick={() => handlePageup(4)}
      >
        아니요
      </div>
    </div>
  );
};

const SelectDevice = ({ pageUp }: SelectDeviceProps) => {
  return (
    <>
      <QuestionLottie
        style={{ marginTop: "1.75rem", marginBottom: "1.75rem" }}
      />
      <div className="border border-neutral-300 rounded-lg w-11/12 h-9 mb-9">
        <select
          name="device"
          id="device"
          className="w-full h-full text-center rounded-lg"
        >
          {device.map((value, index) => (
            <option key={index} value={value.key}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between w-11/12">
        <p className="flex text-xs my-auto">
          찾는 기기가 없나요?&nbsp;{" "}
          <a className="text-bold text-[#1A73E8] font-black">
            여기를 눌러 추가하세요.
          </a>
        </p>
        <button
          className="bg-[#1A73E8] text-white px-[20px] py-[8px] rounded-lg"
          onClick={() => pageUp(2)}
        >
          다음
        </button>
      </div>
    </>
  );
};

const SelectPayment = ({ pageUp }: SelectPaymentProps) => {
  return (
    <>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-9 mb-9">
        <select
          name="device"
          id="device"
          className="w-full h-full text-center rounded-lg"
        >
          {payment.map((value, index) => (
            <option key={index} value={value.key}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mb-9">
        <select
          name="device"
          id="device"
          className="w-full h-full text-center rounded-lg"
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
          onClick={() => pageUp(4)}
        >
          다음
        </button>
      </div>
    </>
  );
};

const SelectCopon = ({ type = "", pageUp }: SelectCoponProps) => {
  return (
    <>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-12 mb-9">
        <input
          name="saleInfo"
          id="saleInfo"
          className="w-full h-full rounded-lg pl-3"
          placeholder="할인 항목"
        />
      </div>
      <div className="border border-neutral-300 rounded-lg w-11/12 h-12 mt-5 mb-9">
        <input
          name="salePrice"
          id="salePrice"
          className="w-full h-full rounded-lg pl-3"
          placeholder="할인 금액을 입력해주세요."
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
          onClick={() => pageUp(6)}
        >
          {type === "sale" ? "계산하기" : "다음"}
        </button>
      </div>
    </>
  );
};

const Reneal = () => {
  const [page, setPage] = useState<number>(1);
  const pageUp = (nextPage: number): void => {
    setPage(nextPage);
  };
  return (
    <div className="flex w-full h-screen items-center justify-center text-sm ">
      <div
        className="flex flex-col  px-8 py-7 items-center border border-neutral-300 rounded-lg"
        style={{ height: "500px", width: "450px" }}
      >
        <div className="text-xl">자급제 휴대폰 계산기</div>
        <div className="text-2xl my-2">{title[page - 1]}</div>

        {page == 1 && <SelectDevice pageUp={pageUp} />}
        {page == 2 && <YesOrNo pageUp={pageUp} />}
        {page == 3 && <SelectPayment pageUp={pageUp} />}
        {page == 4 && <YesOrNo pageUp={pageUp} type="sale" />}
        {page == 5 && <SelectCopon pageUp={pageUp} type="sale" />}
        {page == 6 && <Result pageUp={pageUp} />}
      </div>
    </div>
  );
};

export default Reneal;
