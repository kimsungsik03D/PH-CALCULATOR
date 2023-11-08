"use client";

import { ChangeEvent, useState } from "react";
import { Button, Select, Input } from "@/components";
import { SelcetBox, Sale } from "@/types";
import { initSale, deviceList, saleItems } from "@/constants";
import "./Bill.css";

const Bill = () => {
  const [device, setDevice] = useState<SelcetBox | null>(null);
  const [sale, setSale] = useState<Array<Sale>>([initSale]);

  const [totalSale, setTotalSale] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const onDeviceSelect = (value: SelcetBox) => {
    setDevice(value);
  };

  const onSaleSelect = (value: SelcetBox, key: number) => {
    const newItem: Sale = {
      saleItem: { ...sale[key].saleItem, value: value.value, name: value.name },
      saleLate: 0,
      salePrice: 234234,
    };
    const tempSale = [...sale];
    tempSale[key] = newItem;
    setSale(tempSale);
  };

  const onSaleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (sale[index].saleItem.value == "card") {
      const tempSaleInfo = [...sale];
      const late: number = Number(e.target?.value);
      tempSaleInfo[index].saleLate = late;
      tempSaleInfo[index].salePrice = device?.price
        ? device?.price * 0.001 * late
        : 0;
      setSale([...tempSaleInfo]);
    }
  };

  const addSaleInfo = () => {
    const tempSaleinfo = [...sale];
    tempSaleinfo.push({
      ...initSale,
      saleItem: { ...initSale.saleItem, key: sale.length },
    });
    setSale([...tempSaleinfo]);
  };
  return (
    <div className="bill">
      <div className="bill-category">
        <h3>TITLE</h3>
      </div>
      <div className="bill-type">
        <Button btnText="자급제" />
        <Button btnText="자급제" />
      </div>
      <div className="bill-device">
        <div className="bill-device-selectbox">
          <span className="my-auto">기기</span>
          <span>
            {/* <Select options={selcetItems} customWidth="w-64" /> */}
            <Select
              options={deviceList}
              customWidth="w-56"
              onselect={onDeviceSelect}
            />
          </span>
        </div>
        <div className="bill-device-price">
          <span>출시가격</span>
          <span>{device ? device?.price : 0} 원</span>
        </div>
      </div>

      <hr className="hr-dashed" />
      <hr className="hr-dashed" />
      <div className="bill-sale ">
        <h5>할인정보</h5>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-title">
        <span>할인 종류</span>
        <span>할인 비율 / 품목</span>
        <span>할인 금액</span>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-detail">
        {/* <div className="bill-sale-detail-items">
          <Select options={saleItems} onselect={onSaleSelect} />
          {sale.length != 0 &&
          (sale[0].saleItem.value == "card" ||
            sale[0].saleItem.value == "giftItem") ? (
            <Input
              type="current"
              inputWidth="w-28"
              onChange={(e) => onSaleInput(e, 0)}
              max={100}
              maxMessage={"100까지만 입력 가능합니다."}
            />
          ) : null}
          <span className="my-auto">
            {sale.length != 0 ? sale[0]?.salePrice : 0}원
          </span>
        </div> */}

        {sale &&
          sale.map(({ saleItem, salePrice }: Sale) => (
            <div key={saleItem.key} className="bill-sale-detail-items">
              <Select
                options={saleItems}
                onselect={(e) => onSaleSelect(e, saleItem.key)}
              />
              {sale.length != 0 &&
              (saleItem.value == "card" || saleItem.value == "giftItem") ? (
                <Input
                  type="current"
                  inputWidth="w-28"
                  onChange={(e) => onSaleInput(e, 0)}
                  max={100}
                  maxMessage={"100까지만 입력 가능합니다."}
                />
              ) : null}
              <span className="my-auto">
                {salePrice != 0 ? salePrice : 0}원
              </span>
            </div>
          ))}

        <div>
          <Button
            btnText="할인정보 추가"
            btnWidth="w-full"
            btnCustomClass="mt-1 mb-3"
            onClick={addSaleInfo}
          />
        </div>
      </div>

      <hr className="hr-dashed" />
      <div className="bill-total">
        <div className="bill-sale-total">
          <span>총 할인금액</span>
          <span className="text-red-400 font-bold">- {totalSale} 원</span>
        </div>
        <div className="bill-total-price">
          <span>최종 구매가</span>
          <span>{total} 원</span>
        </div>
      </div>

      <p className="bill-shadow-text">
        * 본 계산은 참고용임으로 실제 계산과 다를 수 있습니다.
      </p>
    </div>
  );
};

export default Bill;
