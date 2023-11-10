"use client";

import { Button, Input, SelectBox, Select } from "@/components";
import { ChangeEvent, useState } from "react";
import "./style.css";

const page = () => {
  // button Click handler
  const handlerClick = () => {
    console.log("##");
  };

  // 컴포넌트 데이터 handler
  const onValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("onValue : ", e.target.value);
  };

  // SelectBox option data
  const options = [
    { key: 1, name: "바나나" },
    { key: 2, name: "사과" },
    { key: 3, name: "멜론" },
    { key: 4, name: "오렌지" },
    { key: 5, name: "자몽" },
  ];
  const onselect = () => {};

  return (
    <div>
      <h1>컴포넌트 페이지</h1>
      <div className="widget">
        <div>
          <Button btnText="Button" onClick={handlerClick} />
        </div>
        {/* <div>
          <SelectBox />
        </div> */}
        <div>
          <Input label="기본 input : " type="current" onValue={onValue} />
        </div>
        <div>
          <Input label="기본 input : " type="text" onValue={onValue} />
        </div>
        <div>
          <Select options={options} onselect={onselect} />
        </div>
      </div>
    </div>
  );
};

export default page;
