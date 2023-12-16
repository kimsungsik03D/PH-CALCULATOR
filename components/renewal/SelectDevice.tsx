import QuestionLottie from "@/app/renewal/Lottie";
import { device } from "@/constants";
import { SelectDeviceProps } from "@/types";

const SelectDevice = ({ pageUp }: SelectDeviceProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <QuestionLottie
        style={{ marginTop: "1.75rem", marginBottom: "1.75rem" }}
      />
      <div className="border border-neutral-300 rounded-lg w-11/12 h-9 mb-9">
        <select
          name="device"
          id="device"
          className="w-full h-full text-center rounded-lg"
        >
          {device.map((value, index) => (
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
          onClick={() => pageUp(2)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SelectDevice;
