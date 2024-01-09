"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";
import { fruit_1 } from "@/images";
import { ResultType } from "@/types";
import { redirect } from "next/navigation";
const ResultDetail = dynamic(
  () => import("@/components/renewal/ResultDetail"),
  {
    ssr: false,
    loading: () => null,
  }
);

const ResultCollection = () => {
  const [items, setItems] = useState<ResultType[]>([]);
  const [isClick, setIsClick] = useState<null | number>(null);
  const [isPriceSort, setisPriceSort] = useState(true);

  useEffect(() => {
    fetchResultData();
  }, []);

  const totalPrice = (item: ResultType): number => {
    const paymentDiscountPrice =
      Number(item.payment.late) * 0.01 * Number(item.device.price);
    const totalDiscount =
      Number(paymentDiscountPrice) + Number(item.sale.salePrice);
    const totalPrice = Number(item.device.price) - Number(totalDiscount);

    return totalPrice / 10000;
  };

  const fetchResultData = () => {
    const result: string | null = localStorage.getItem("result");
    const item = JSON.parse(result ?? "[{}]");
    if (item.length == 1 && !item[0].device) {
      redirect("/renewal");
    }

    setItems(item);
  };

  const removeItem = (itemIndex: number) => {
    const removeItems = items.filter((value, index) => index != itemIndex);
    setItems(removeItems.reverse());
    localStorage.setItem("result", JSON.stringify(removeItems.reverse()));
  };

  const handlerItemClick = (index: number) => {
    if (isClick == index) setIsClick(null);
    else setIsClick(index);
  };

  const deviceFileter = () => {
    console.log("deviceFileter");
  };

  const dateSort = () => {
    console.log("dateSort");
  };

  const priceSort = () => {
    const tempItems = items;

    const sortTemp = tempItems.sort((value1, value2) => {
      return isPriceSort
        ? totalPrice(value1) - totalPrice(value2)
        : totalPrice(value2) - totalPrice(value1);
    });

    setisPriceSort(!isPriceSort);
    setItems([...sortTemp]);
  };

  return (
    <>
      <div className="flex justify-end mx-20">
        <button className="mx-3" onClick={dateSort}>
          최신순
        </button>
        <button className="mx-3" onClick={priceSort}>
          금액순
        </button>
        <select
          className="mx-3"
          name="deviceFilter"
          id="deviceFilter"
          onChange={deviceFileter}
        >
          <option value="ip15">아이폰15</option>
          <option value="ip15pro">아이폰15pro</option>
        </select>
      </div>
      <div className="flex mt-10 mx-20 gap-2 flex-wrap">
        {items.map((item, index) => (
          <div className="w-[24.3%] h-[188.5px] border rounded-lg" key={index}>
            <div
              className="border shadow-sm rounded-lg transition-all relative"
              onClick={() => handlerItemClick(index)}
            >
              <div className="overflow-visible p-0">
                <Image
                  width={300}
                  height={300}
                  alt={"apple"}
                  className="w-full h-[140px] rounded-lg shadow-lg object-fill"
                  src={item.device.url ?? fruit_1}
                  // placeholder="blur"
                />
              </div>
              <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large text-small justify-between">
                <b>{item.device.name}</b>
                <p className="text-default-500">
                  {totalPrice(item)}
                  만원
                </p>
              </div>
              <button
                className="bg-red-400 text-white rounded-full w-6 h-6 text-center absolute top-1 right-1 hover:bg-red-500"
                id={index.toString()}
                onClick={() => removeItem(index)}
              >
                -
              </button>
              {isClick == index && <ResultDetail data={item} />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultCollection;
