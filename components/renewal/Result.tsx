import { ResultProps } from "@/types";

const Result = ({ pageUp }: ResultProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <hr className=" w-full border-black mt-3" />
      <div className="my-3 w-full">
        <div className="flex justify-around text-base">
          <span className="w-24 text-center">기기</span>
          <span className="w-24 text-right">금액</span>
        </div>
        <div className="my-2 flex justify-around w-full">
          <span className="w-36 text-center">IPhone 15pro 256gb</span>
          <span className="w-24 text-right">9,000,000원</span>
        </div>
      </div>
      <hr className=" w-full border-black mt-1 mb-5" />
      <hr className=" w-full border-black mt-1" />
      <div className="my-4 w-full">
        <div className="flex justify-around text-base">
          <span className="w-24 text-center">할인정보</span>
          <span className="w-24 text-right">할인금액</span>
        </div>
        <div className="my-5 flex justify-around w-full">
          <span className="w-24 text-center">삼성카드</span>
          <span className="w-24 text-right">-1,000,000원</span>
        </div>
        <div className="mt-5 flex justify-around w-full">
          <span className="w-24 text-center">사은품</span>
          <span className="w-24 text-right">-1,000,000원</span>
        </div>
      </div>
      <hr className=" w-full border-black mt-1" />
      <div className="flex flex-col items-end w-full  my-7">
        <div className="flex">
          <div>할인총액 : </div>
          <div className="w-24 text-right">-1,000,000원</div>
        </div>
        <div className="flex">
          <div>최종금액 : </div>
          <div className="w-24 text-right">1,000,000원</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
