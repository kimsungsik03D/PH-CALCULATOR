"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChangeEvent, useEffect } from "react";
import QuestionLottie from "@/app/renewal/Lottie";
import { Transition } from "react-transition-group";
import {
  SelectDeviceProps,
  Device,
  DefaultStyle,
  TransitionStylesType,
} from "@/types";
import { handleSelectFindObject } from "@/common";
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

const SelectDevice = ({ pageUp, setData, deviceList }: SelectDeviceProps) => {
  const nodeRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [fade, setFade] = useState<boolean>(true);
  const [deviceData, setDeviceData] = useState<any>({ ...deviceList[0] });

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
    }, 1000);
    setTimeout(() => {
      setFade(true);
      setLoad(true);
    }, 3000);
  }, []);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;

    setTimeout(() => {
      setFade(false);
    }, 1000);
    setTimeout(() => {
      setFade(true);
      setDeviceData({ ...handleSelectFindObject(targetValue, deviceList) });
      setLoad(true);
    }, 3000);
  };

  const onBtnClick = () => {
    setData({ device: deviceData });
    pageUp(2);
  };

  return (
    <Transition nodeRef={nodeRef} in={fade} timeout={duration}>
      {(state: string) => {
        return (
          <div className="w-full flex flex-col items-center">
            <div
              ref={nodeRef}
              className="w-full flex flex-col items-center"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {load ? (
                <Image
                  width={1920}
                  height={1080}
                  alt={"apple"}
                  className="w-full h-[240px] rounded-lg shadow-lg object-fill"
                  src={deviceData.url}
                />
              ) : (
                <QuestionLottie
                  style={{ marginTop: "1.75rem", marginBottom: "3.75rem" }}
                />
              )}
            </div>
            <div className="border border-neutral-300 rounded-lg w-11/12 h-9 mb-9">
              <select
                name="device"
                id="device"
                className="w-full h-full text-center rounded-lg"
                onChange={handleChange}
              >
                {deviceList.map((value, index) => (
                  <option key={index} value={value.key}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between w-11/12">
              <p className="flex text-xs my-auto">
                찾는 기기가 없나요?&nbsp;{" "}
                <a className="text-bold text-[#1A73E8] font-black">
                  여기를 눌러 추가하세요.
                </a>
              </p>
              <button
                className="bg-[#1A73E8] text-white px-[20px] py-[8px] rounded-lg"
                onClick={onBtnClick}
              >
                다음
              </button>
            </div>
          </div>
        );
      }}
    </Transition>
  );
};

export default SelectDevice;
