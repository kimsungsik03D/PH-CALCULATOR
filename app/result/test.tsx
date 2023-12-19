"use client";
import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log(localStorage.getItem("test"));
  }, []);
  return <div></div>;
};

export default Test;
