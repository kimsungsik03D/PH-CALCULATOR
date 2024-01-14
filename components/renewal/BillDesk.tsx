"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Result = dynamic(() => import("@/components/renewal/Result"), {
  ssr: false,
  loading: () => null,
});
const SelectCopon = dynamic(() => import("@/components/renewal/SelectCopon"), {
  ssr: false,
  loading: () => null,
});
const SelectDevice = dynamic(
  () => import("@/components/renewal/SelectDevice"),
  {
    ssr: true,
    loading: () => null,
  }
);
const SelectPayment = dynamic(
  () => import("@/components/renewal/SelectPayment"),
  {
    ssr: false,
    loading: () => null,
  }
);
const YesOrNo = dynamic(() => import("@/components/renewal/YesOrNo"), {
  ssr: false,
  loading: () => null,
});
import { Transition } from "react-transition-group";
import {
  ResultProps,
  ResultType,
  TransitionStylesType,
  DefaultStyle,
  Device,
  Payment,
  Sale2,
} from "@/types";
import { title } from "@/constants";
import { setLocalStorageResult } from "@/common";

const duration = 1000;

const defaultStyle: DefaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: TransitionStylesType = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const BillDesk = ({ deviceList, paymentList }: any) => {
  const nodeRef = useRef(null);

  const [page, setPage] = useState<number>(1);

  const [fade, setFade] = useState<boolean>(true);
  const [bill, setBill] = useState<ResultType>({
    device: {
      key: "",
      name: "",
      price: 0,
      url: "",
    },
    payment: {
      key: "",
      name: "",
      late: 0,
      lateName: "",
    },
    sale: { saleInfo: "", salePrice: "" },
    date: null,
  });

  // useEffect(() => {
  //   pageUp(1);
  // }, []);

  const pageUp = (nextPage: number) => {
    setFade(false);

    setTimeout(() => {
      setPage(nextPage);
      setFade(true);
    }, 1000);
  };
  const handleBillData = (data: Device | Payment | Sale2) => {
    setBill({ ...bill, ...data, date: new Date() });
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
            <div className="text-xl sm:text-2xl my-2">{title[page - 1]}</div>

            {page == 1 && (
              <SelectDevice
                deviceList={deviceList}
                pageUp={pageUp}
                setData={handleBillData}
              />
            )}
            {page == 2 && <YesOrNo pageUp={pageUp} />}
            {page == 3 && (
              <SelectPayment
                paymentList={paymentList}
                pageUp={pageUp}
                setData={handleBillData}
              />
            )}
            {page == 4 && <YesOrNo pageUp={pageUp} type="sale" />}
            {page == 5 && (
              <SelectCopon pageUp={pageUp} setData={handleBillData} />
            )}
            {page == 6 && fade && <Result data={bill} />}
          </div>
        );
      }}
    </Transition>
  );
};

export default BillDesk;
