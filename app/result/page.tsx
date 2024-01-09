// "use client";
import dynamic from "next/dynamic";
import React from "react";
// import { ResultCollection } from "@/components";
const ResultCollection = dynamic(
  () => import("@/components/renewal/ResultCollection"),
  {
    ssr: false,
    loading: () => null,
  }
);

const Result = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="inline-block mt-10 py-1 px-5 border border-neutral-300 text-neutral-300 rounded-full ">
          항목을 클릭하면 상세 정보를 확인 할 수 있습니다.
        </p>
      </div>

      <ResultCollection />
    </div>
  );
};

export default Result;
