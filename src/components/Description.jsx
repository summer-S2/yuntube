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
    <div className="bg-[#282828] rounded-xl ">
      <pre
        className={`relative text-sm p-4 pb-6 whitespace-pre-wrap transition-all duration-1000 ${
          more ? "mb-5" : "overflow-hidden h-[100px] line-clamp-1"
        }`}
      >
        {description}
      </pre>
      <button
        className={`w-full rounded-b-xl py-1 bg-[#282828] hover:bg-[#3a3a3a] transition-all`}
        onClick={handleClick}
      >
        {more ? "간략히" : "더보기"}
      </button>
    </div>
  );
}
