"use client";

import { useState } from "react";
import { useRef } from "react";
import {
  Result,
  SelectCopon,
  SelectDevice,
  SelectPayment,
  YesOrNo,
} from "@/components";
import { Transition } from "react-transition-group";
import { ResultProps } from "@/types";

interface transitionStylesType {
  [key: string]: { opacity: number };
  entering: { opacity: number };
  entered: { opacity: number };
  exiting: { opacity: number };
  exited: { opacity: number };
}

const title: string[] = [
  "기기를 고르세요.",
  "카드할인 정보가 있나요?",
  "카드 할인 정보를 입력해주세요",
  "추가 할인 정보가 있나요?",
  "추가 할인 정보를 입력해주세요.",
  "영수증",
];

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: transitionStylesType = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Reneal = () => {
  const nodeRef = useRef(null);

  const [page, setPage] = useState<number>(1);

  const [fade, setFade] = useState(true);
  const [bill, setBill] = useState<ResultProps>({
    data: {
      device: {
        key: "",
        name: "",
        price: 0,
      },
      payment: {
        key: "",
        name: "",
        late: 0,
        lateName: "",
      },
      sale: { saleInfo: "", salePrice: "" },
    },
  });

  const pageUp = (nextPage: number): void => {
    setFade(false);
    setTimeout(() => {
      setPage(nextPage);
      setFade(true);
    }, 1000);
  };
  const handleBillData = (data: any) => {
    setBill({ ...bill.data, ...data });
  };
  return (
    <div className="flex w-full h-screen items-center justify-center text-sm ">
      <div
        className="flex flex-col  px-8 py-7 items-center border border-neutral-300 rounded-lg"
        style={{ height: "500px", width: "450px" }}
      >
        <div className="text-xl">자급제 휴대폰 계산기</div>
        <Transition nodeRef={nodeRef} in={fade} timeout={duration}>
          {(state: string) => {
            return (
              <div
                ref={nodeRef}
                className="w-full flex flex-col items-center"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div className="text-2xl my-2">{title[page - 1]}</div>

                {page == 1 && (
                  <SelectDevice pageUp={pageUp} setData={handleBillData} />
                )}
                {page == 2 && <YesOrNo pageUp={pageUp} />}
                {page == 3 && (
                  <SelectPayment pageUp={pageUp} setData={handleBillData} />
                )}
                {page == 4 && <YesOrNo pageUp={pageUp} type="sale" />}
                {page == 5 && (
                  <SelectCopon pageUp={pageUp} setData={handleBillData} />
                )}
                {page == 6 && <Result data={bill.data} />}
              </div>
            );
          }}
        </Transition>
      </div>
    </div>
  );
};

export default Reneal;
