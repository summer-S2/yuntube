import React, { useEffect, useState } from "react";

export default function Description({ description, id }) {
  const [more, setMore] = useState(false);

  const handleClick = () => {
    setMore(!more);
  };

  // 렌더됐을때 초깃값은 항상 false 유지
  useEffect(() => {
    setMore(false);
  }, [id]);

  return (
    <pre
      className={`relative text-sm rounded-xl p-4 pb-6 bg-[#282828] whitespace-pre-wrap ${
        more ? "" : "overflow-hidden h-[100px]"
      }`}
    >
      {description}
      <button
        className="absolute w-full bottom-0 rounded-b-xl left-0 bg-[#282828] hover:bg-[#333]"
        onClick={handleClick}
      >
        {more ? "간략히" : "더보기"}
      </button>
    </pre>
  );
}
