import React, { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
  const { keyword } = useParams(); // 파라미터에 전달된 :keyword 값
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  // 파라미터에 키워드가 있다면 검색창에 키워드 입력
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <input
        className="w-7/12 px-4 outline-none bg-black text-gray-300 border-2 border-[#222] rounded-l-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="검색어를 입력해주세요."
      />
      <button className="px-4 bg-[#222] rounded-r-full">
        <BsSearch />
      </button>
    </form>
  );
}
