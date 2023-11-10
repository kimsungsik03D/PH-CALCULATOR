"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button, Select, Input } from "@/components";
import { SelcetBox, Sale } from "@/types";
import { initSale, initSaleArry, deviceList, saleItems } from "@/constants";
import "./Bill.css";

const Bill = ({ shop }: { shop: string }) => {
  const [device, setDevice] = useState<SelcetBox | null>(null);
  const [sale, setSale] = useState<Array<Sale>>(initSaleArry);

  const [totalSale, setTotalSale] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    caluTotalInfo();
  }, [sale]);

  useEffect(() => {
    console.log("device : ,", device);
    refreshSaleDetail();
    caluTotalInfo();
  }, [device]);

  /** 기기 선택 함수 */
  const onDeviceSelect = (value: SelcetBox) => {
    setDevice(value);
  };

  /** 최종 구매가 계산 함수
   * @description 기기 출시가격  - 총 할인 금액
   */
  const caluTotalInfo = () => {
    let result = 0;
    let devicePrice = device != null ? device.price : 0;
    sale.map((value) => {
      result += Number(value.salePrice);
    });
    setTotalSale(result);
    setTotal(devicePrice ? devicePrice - result : 0);
  };

  /** 총 할인금액 재 계산 함수
   * @description 할인 종류가 카드일경우 재 계산이 필요하기 떄문에 재 계산
   */
  const refreshSaleDetail = () => {
    const tempSale = [...sale];
    tempSale.map((value) => {
      if (value.saleItem.value == "card") {
        value.salePrice = device?.price
          ? device?.price * 0.01 * Number(value.saleLate)
          : 0;
      }
      return value;
    });
  };

  /** 할인 종류 선택 함수
   * @description useState에 데이터를 삽입하기 위해 사용
   */
  const onSaleSelect = (value: SelcetBox, key: number) => {
    const newItem: Sale = {
      saleItem: {
        ...sale[key].saleItem,
        value: value.value,
        name: value.name,
        placeholder: value.placeholder,
      },
      saleLate: value.value == "card" ? 0 : "",
      salePrice: 0,
    };
    const tempSale = [...sale];
    tempSale[key] = newItem;
    setSale(tempSale);
  };

  /**  할인 비율 / 품목 input 입력에대한 함수
   * @description 할인 종류가 카드일 경우 비율계산으로 적용
   */
  const onSaleLateInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const tempSaleInfo = [...sale];

    if (sale[index].saleItem.value == "card") {
      const late: number = Number.isNaN(Number(e.target?.value))
        ? 0
        : Number(e.target?.value);
      tempSaleInfo[index].saleLate = late;
      tempSaleInfo[index].salePrice = device?.price
        ? device?.price * 0.01 * late
        : 0;
    } else {
      const price: number = Number(e.target?.value);
      tempSaleInfo[index].salePrice = price;
    }
    setSale([...tempSaleInfo]);
  };

  /** Sale 세부란 추가 */
  const addSaleInfo = () => {
    const tempSaleinfo = [...sale];
    tempSaleinfo.push({
      ...initSale,
      saleItem: { ...initSale.saleItem, key: sale.length },
    });
    setSale([...tempSaleinfo]);
  };

  /** Sale 세부란 삭제 */
  const removeSaleInfo = (index: number) => {
    if (sale.length === 3) {
      alert("삭제 불가");
      return;
    }
    const tempSaleinfo = [...sale];
    tempSaleinfo.splice(index, 1);
    setSale(tempSaleinfo);
  };

  return (
    <div className="bill">
      <div className="bill-category">
        <h3>자급제 기기값 계산기</h3>
        <h5>{shop} 쇼핑몰</h5>
      </div>
      <div className="bill-type">
        {/* <Button btnText="자급제 기기값 계산기" /> */}
        {/* <Button btnText="자급제" /> */}
      </div>
      <div className="bill-device">
        <div className="bill-device-selectbox">
          <span className="my-auto">기기</span>
          <span>
            <Select
              options={deviceList}
              customWidth="w-56"
              onselect={onDeviceSelect}
            />
          </span>
        </div>
        <div className="bill-device-price">
          <span>출시가격</span>
          <span>{device ? device?.price?.toLocaleString("ko-KR") : 0} 원</span>
        </div>
      </div>

      <hr className="hr-dashed" />
      <hr className="hr-dashed" />
      <div className="bill-sale flex">
        <h5>할인정보 </h5>
        <p className="text-xs my-auto">
          &nbsp;&nbsp;* 카드, 쿠폰이 없을 공란으로 맨 아래 칸부터 작성{" "}
        </p>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-title">
        <span>할인 종류</span>
        <span>할인 비율 / 품목</span>
        <span>할인 금액</span>
      </div>
      <hr className="hr-dashed" />
      <div className="bill-sale-detail">
        {sale &&
          sale.map(({ saleItem, salePrice, saleLate }: Sale, index: number) => (
            <div key={saleItem.key} className="bill-sale-detail-items ">
              <div className="items">
                <Select
                  select={index < 1 ? saleItem : null}
                  disabled={index < 1 ? true : false}
                  options={saleItems}
                  onselect={(e) => onSaleSelect(e, index)}
                />
              </div>

              {(saleItem.value == "card" || saleItem.value == "giftItem") &&
              saleItem.value ? (
                <div className="items flex-end">
                  <Input
                    type={`${saleItem.value == "card" ? "current" : "text"}`}
                    value={saleLate}
                    inputWidth="w-28"
                    onChange={(e) => onSaleLateInput(e, index)}
                    max={100}
                    maxMessage={"100까지만 입력 가능합니다."}
                    placeholder={
                      saleItem.placeholder == null ? "" : saleItem.placeholder
                    }
                  />
                </div>
              ) : null}
              {/* {sale.length != 0 && saleItem.value ? (
                <div className="items flex-end">
                  <Input
                    type={`${saleItem.value == "card" ? "current" : "text"}`}
                    value={saleLate}
                    inputWidth="w-28"
                    onChange={(e) => onSaleLateInput(e, index)}
                    max={100}
                    maxMessage={"100까지만 입력 가능합니다."}
                    placeholder={
                      saleItem.placeholder == null ? "" : saleItem.placeholder
                    }
                  />
                </div>
              ) : null} */}

              <span className="my-auto flex justify-end items">
                {saleItem.value == "card" ? (
                  <span className="my-auto">
                    {salePrice != 0 ? salePrice.toLocaleString("ko-KR") : 0}원
                  </span>
                ) : (
                  <span>
                    <Input
                      type={`current`}
                      value={salePrice}
                      inputWidth="w-full"
                      max={10000000}
                      maxMessage={"9999999까지만 입력 가능합니다."}
                      onChange={(e) => onSaleLateInput(e, index)}
                      placeholder={`${"할인금액"}`}
                    />
                  </span>
                )}
                <span className="w-9 text-right my-auto">
                  {index > 0 && (
                    <Button
                      btnText="-"
                      onClick={() => removeSaleInfo(index)}
                      btnSize="mini"
                      btnColor="red"
                    />
                  )}
                </span>
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
          <span className="text-red-400 font-bold">
            - {totalSale.toLocaleString("ko-KR")} 원
          </span>
        </div>
        <div className="bill-total-price">
          <span>최종 구매가</span>
          <span>{total.toLocaleString("ko-KR")} 원</span>
        </div>
      </div>

      <p className="bill-shadow-text">
        * 본 계산은 참고용임으로 실제 계산과 다를 수 있습니다.
      </p>
    </div>
  );
};

export default Bill;
