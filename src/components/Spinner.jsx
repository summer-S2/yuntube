import React from "react";

export default function Spinner() {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-black">
      <div className="animate-spin w-10 h-10 rounded-full border-8 border-gray-300 border-e-gray-700"></div>
    </div>
  );
}
