// "use client";
import React from "react";
import { GetServerSideProps } from "next";

import Image from "next/image";
import {
  fruit_1,
  fruit_2,
  fruit_3,
  fruit_4,
  fruit_5,
  fruit_6,
  fruit_7,
  fruit_8,
} from "@/images";
const getServerSiceProps: GetServerSideProps = async ({ req, res }) => {
  console.log();
  localStorage.setItem("test", "testText");
  return { props: {} };
};

const Result = () => {
  const list = [
    {
      title: "Orange",
      img: fruit_1,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: fruit_2,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: fruit_3,
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: fruit_4,
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: fruit_5,
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: fruit_6,
      price: "$8.00",
    },
    {
      title: "Banana",
      img: fruit_7,
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: fruit_8,
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: fruit_8,
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: fruit_8,
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: fruit_8,
      price: "$12.20",
    },
  ];

  if (typeof window !== "undefined") {
    // // Perform localStorage action
    // const item = localStorage.getItem('key');
    console.log(localStorage.getItem("test"));
  }
  // localStorage.setItem("test", "testText");

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-20">
      {list.map((item, index) => (
        <div
          className="border shadow-sm rounded-lg hover:scale-95 transition-all"
          key={index}
        >
          <div className="overflow-visible p-0">
            <Image
              width={300}
              height={300}
              alt={item.title}
              className="w-full h-[140px] rounded-lg shadow-lg object-fill"
              src={item.img}
            />
          </div>
          <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large text-small justify-between">
            {/* <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p> */}
            <b>IPhone 15 pro</b>
            <p className="text-default-500">120만원</p>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default Result;
