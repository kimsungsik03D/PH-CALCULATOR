"use client";

import { useState, useRef } from "react";

import {
  Result,
  SelectCopon,
  SelectDevice,
  SelectPayment,
  YesOrNo,
} from "@/components";
import { Transition } from "react-transition-group";
import { ResultProps, transitionStylesType } from "@/types";
import { title } from "@/constants";
import { setLocalStorageResult } from "@/common";

const duration = 200;

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

const BillDesk = () => {
  const nodeRef = useRef(null);

  const [page, setPage] = useState<number>(1);

  const [fade, setFade] = useState(true);
  const [bill, setBill] = useState({
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
  });

  const pageUp = (nextPage: number): void => {
    setFade(false);

    setTimeout(() => {
      setPage(nextPage);
      if (nextPage === 6) {
        // localStorage의 데이터 저장
        const item = setLocalStorageResult(bill);
        localStorage.setItem("result", JSON.stringify(item));
      }
      setFade(true);
    }, 1000);
  };
  const handleBillData = (data: any) => {
    setBill({ ...bill, ...data });
  };
  return (
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
            {page == 6 && <Result data={bill} />}
          </div>
        );
      }}
    </Transition>
  );
};

export default BillDesk;
