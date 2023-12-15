import React, { CSSProperties } from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "./questionLottie.json";

export default function QuestionLottie({ style }: { style: CSSProperties }) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150, ...style }}
    />
  );
}
