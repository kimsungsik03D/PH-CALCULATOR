"use client";

import { ChangeEvent, useState } from "react";
import { Button, Input, SelectBox, Select } from "@/components";
import "./style.css";

const Widget = () => {
  const [curruntValue, setCurruntValue] = useState<string>("0");
  // button Click handler
  const handlerClick = () => {
    console.log("##");
  };

  // 컴포넌트 데이터 handler
  const onValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCurruntValue(e.target.value);
    // console.log("onValue : ", e.target.value);
  };

  // SelectBox option data
  const options = [
    { key: 1, name: "바나나" },
    { key: 2, name: "사과" },
    { key: 3, name: "멜론" },
    { key: 4, name: "오렌지" },
    { key: 5, name: "자몽" },
  ];

  return (
    <div className="widget">
      <div>
        <Button btnText="Button" onClick={handlerClick} />
      </div>
      {/* <div>
    <SelectBox />
  </div> */}
      <div>
        <Input
          label="기본 input : "
          type="current"
          value={curruntValue}
          onChange={onValue}
        />
      </div>
      <div>
        <Input label="기본 input : " type="text" />
      </div>
      <div>{/* <Select options={options} /> */}</div>
    </div>
  );
};

export default Widget;
