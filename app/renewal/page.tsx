import { BillDesk } from "@/components";

const Reneal = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center text-sm ">
      <div
        className="flex flex-col  px-8 py-7 items-center border border-neutral-300 rounded-lg"
        style={{ height: "500px", width: "450px" }}
      >
        <div className="text-xl">자급제 휴대폰 계산기</div>
        <BillDesk />
      </div>
    </div>
  );
};

export default Reneal;
