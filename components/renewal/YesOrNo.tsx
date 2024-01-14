import { YesOrNoProps } from "@/types";

const YesOrNo = ({ type = "", pageUp }: YesOrNoProps) => {
  const handlePageup = (page: number) => {
    let dynamicPage = 0;
    if (type === "sale") {
      dynamicPage = 2;
    }
    pageUp(page + dynamicPage);
  };
  return (
    <div className="flex justify-between w-11/12 sm:w-9/12 mt-28 text-white">
      <div
        className="bg-[#1A73E8] py-[35px] px-[43px] text-center text-sm sm:text-base rounded-2xl"
        onClick={() => handlePageup(3)}
      >
        예
      </div>
      <div
        className="bg-[#1A73E8] p-[35px] text-center text-sm sm:text-base rounded-2xl"
        onClick={() => handlePageup(4)}
      >
        아니요
      </div>
    </div>
  );
};

export default YesOrNo;
