import React from "react";
import ProgressBar from "./ProgressBar";
export const AtsResultCard = ({ title, score, dark }) => {
  return (
    <div className={`p-5 rounded-xl ${dark ? "bg-gray-900" : "bg-white"}`}>
      <p className="text-center font-bold text-2xl">{title}</p>

      <h3 className="text-3xl font-bold mt-3">
        <ProgressBar dark={dark} />
      </h3>
    </div>
  );
};
