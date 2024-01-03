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
    <div className="mx-24 gap-2 grid grid-cols-2 sm:grid-cols-4 mt-20">
      <ResultCollection />
    </div>
    // </div>
  );
};

export default Result;
