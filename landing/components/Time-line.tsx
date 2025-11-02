"use client";
import React from "react";
import { dataAboutPage } from "@/data";
import TimeLineItem from "./TimeLineItem"; // importamos el componente hijo

const TimeLine = () => {
  return (
    <div className="flex flex-col divide-y divide-slate-200">
      <div className="w-full max-w-3xl md:pt-10">
        {dataAboutPage.map((data) => (
          <TimeLineItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
