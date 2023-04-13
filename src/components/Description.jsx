import React, { useState } from "react";

export default function Description({ description }) {
  const [more, setMore] = useState(false);

  const handleClick = () => {
    setMore(!more);
  };

  // return (
  //   <div className={`relative ${more ? "" : "overflow-hidden h-[100px]"}`}>
  //     <pre className="text-sm rounded-xl p-4 pb-6 bg-[#282828] whitespace-pre-wrap">
  //       {description}
  //     </pre>
  //     <button className="absolute w-full h-10 bottom-0" onClick={handleClick}>
  //       {more ? "숨기기" : "더보기"}
  //     </button>
  //   </div>
  // );

  return (
    <pre
      className={`relative text-sm rounded-xl p-4 pb-6 bg-[#282828] whitespace-pre-wrap ${
        more ? "" : "overflow-hidden h-[100px]"
      }`}
    >
      {description}
      <button
        className="absolute w-full h-6 bottom-0 rounded-b-xl left-0 bg-[#282828] hover:bg-[#333]"
        onClick={handleClick}
      >
        {more ? "간략히" : "더보기"}
      </button>
    </pre>
  );
}
