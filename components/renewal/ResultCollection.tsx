"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fruit_1 } from "@/images";
import { ResultType } from "@/types";
import { redirect } from "next/navigation";

const ResultCollection = () => {
  const [items, setItems] = useState<ResultType[]>([]);

  useEffect(() => {
    fetchResultData();
  }, []);

  const totalPrice = (index: number): number => {
    const paymentDiscountPrice =
      Number(items[index].payment.late) *
      0.01 *
      Number(items[index].device.price);
    const totalDiscount =
      Number(paymentDiscountPrice) + Number(items[index].sale.salePrice);
    const totalPrice =
      Number(items[index].device.price) - Number(totalDiscount);

    return totalPrice / 10000;
  };

  const fetchResultData = () => {
    const result: string | null = localStorage.getItem("result");
    const item = JSON.parse(result ?? "[{}]");
    if (item.length == 1 && !item[0].device) {
      redirect("/renewal");
    }

    setItems(item.reverse());
  };

  const removeItem = (itemIndex: number) => {
    const removeItems = items.filter((value, index) => index != itemIndex);
    setItems(removeItems);
    localStorage.setItem("result", JSON.stringify(removeItems.reverse()));
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          className="border shadow-sm rounded-lg hover:scale-95 transition-all relative"
          key={index}
        >
          <div className="overflow-visible p-0">
            <Image
              width={300}
              height={300}
              alt={"apple"}
              className="w-full h-[140px] rounded-lg shadow-lg object-fill"
              src={fruit_1}
              placeholder="blur"
            />
          </div>
          <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large text-small justify-between">
            <b>{item.device.name}</b>
            <p className="text-default-500">
              {totalPrice(index)}
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
        </div>
      ))}
    </>
  );
};

export default ResultCollection;
