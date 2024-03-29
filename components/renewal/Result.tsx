"use client";

import { useEffect } from "react";
import { ResultProps } from "@/types";
import { setLocalStorageResult } from "@/common";

const Result = ({ data }: ResultProps) => {
  useEffect(() => {
    const item = setLocalStorageResult(data);
    localStorage.setItem("result", JSON.stringify(item));
  }, []);

  const isPaymentInfo = data.payment.name && data.payment.late;
  const isSaleInfo = data.sale.saleInfo && data.sale.salePrice;

  const paymentDiscountPrice =
    Number(data.payment.late) * 0.01 * Number(data.device.price);
  const totalDiscount =
    Number(paymentDiscountPrice) + Number(data.sale.salePrice);
  const totalPrice = Number(data.device.price) - Number(totalDiscount);

  return (
    <div className="w-full flex flex-col items-center  h-full justify-between">
      <div className="w-full">
        <hr className=" w-full border-black mt-3" />
        <div className="my-3 w-full">
          <div className="flex justify-around text-base">
            <span className="w-24 text-center">기기</span>
            <span className="w-24 text-right">금액</span>
          </div>
          <div className="my-2 flex justify-around w-full">
            <span className="w-36 text-center">{data.device.name}</span>
            <span className="w-24 text-right my-auto">
              {data.device.price}원
            </span>
          </div>
        </div>
        <hr className=" w-full border-black mt-1" />
      </div>
      {(isPaymentInfo || isSaleInfo) && (
        <>
          <hr className=" w-full border-black mt-1" />
          <div className="my-4 w-full">
            <div className="flex justify-around text-base">
              <span className="w-24 text-center">할인정보</span>
              <span className="w-24 text-right">할인금액</span>
            </div>
            {isPaymentInfo && (
              <div className="my-5 flex justify-around w-full">
                <span className="w-24 text-center">{data.payment.name}</span>
                <span className="w-24 text-right">
                  -{paymentDiscountPrice}원
                </span>
              </div>
            )}
            {isSaleInfo && (
              <div className="mt-5 flex justify-around w-full">
                <span className="w-24 text-center">사은품</span>
                <span className="w-24 text-right">
                  -{data.sale.salePrice}원
                </span>
              </div>
            )}
            <hr className=" w-full border-black mt-5 mb-2" />
          </div>
        </>
      )}

      <div className="flex flex-col items-end w-full  my-7">
        {totalDiscount != 0 && (
          <div className="flex">
            <div>할인총액 : </div>
            <div className="w-24 text-right">-{totalDiscount}원</div>
          </div>
        )}
        <div className="flex">
          <div>최종금액 : </div>
          <div className="w-24 text-right">{totalPrice}원</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
