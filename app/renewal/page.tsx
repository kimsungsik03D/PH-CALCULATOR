"use client";

import { useState } from "react";
import {
  Result,
  SelectCopon,
  SelectDevice,
  SelectPayment,
  YesOrNo,
} from "@/components";
import { Transition } from "react-transition-group";

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

const duration = 500;

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
  // console.log({ ...transitionStyles });
  const [page, setPage] = useState<number>(1);
  const [fade, setFade] = useState(true);

  const pageUp = (nextPage: number): void => {
    setFade(false);
    setTimeout(() => {
      setPage(nextPage);
      setFade(true);
    }, 1000);
  };
  return (
    <div className="flex w-full h-screen items-center justify-center text-sm ">
      <div
        className="flex flex-col  px-8 py-7 items-center border border-neutral-300 rounded-lg"
        style={{ height: "500px", width: "450px" }}
      >
        <div className="text-xl">자급제 휴대폰 계산기</div>
        <Transition in={fade} timeout={duration}>
          {(state: string) => {
            return (
              <div
                className="w-full flex flex-col items-center"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div className="text-2xl my-2">{title[page - 1]}</div>

                {page == 1 && <SelectDevice pageUp={pageUp} />}
                {page == 2 && <YesOrNo pageUp={pageUp} />}
                {page == 3 && <SelectPayment pageUp={pageUp} />}
                {page == 4 && <YesOrNo pageUp={pageUp} type="sale" />}
                {page == 5 && <SelectCopon pageUp={pageUp} type="sale" />}
                {page == 6 && <Result pageUp={pageUp} />}
              </div>
            );
          }}
        </Transition>
      </div>
    </div>
  );
};

export default Reneal;
