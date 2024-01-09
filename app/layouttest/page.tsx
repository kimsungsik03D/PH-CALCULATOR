import React from "react";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/renewal");
  return (
    <>
      <div className="flex mt-10 mx-20 gap-2 flex-wrap">
        <div className="w-[24.3%] h-[220px] border">Item1</div>
        <div className="w-[24.3%] h-[220px] border">Item2</div>
        <div className="w-[24.3%] h-[220px] border">Item3</div>
        <div className="w-[24.3%] h-[220px] border">Item4</div>
        <div className="w-[24.3%] h-[220px] border">Item4</div>
        <div className="w-[24.3%] h-[220px] border">Item4</div>
      </div>
    </>
  );
};

export default page;
