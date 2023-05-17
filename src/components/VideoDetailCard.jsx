import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoDetailCard({ video, id }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const handleClick = () => {
    navigate(`/videos/watch/${id}`, { state: { video, id } });
  };
  return (
    <li className={`flex items-center mx-4 mb-2`} onClick={handleClick}>
      <img
        className="cursor-pointer rounded-sm w-[168px] h-[94px]"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex">
        <div className="flex flex-col ml-3">
          <p className="text-sm font-semibold mb-2 line-clamp-2 cursor-pointer overflow-hidden">
            {title}
          </p>
          <p className="text-xs opacity-80 font-light cursor-pointer">
            {channelTitle}
          </p>
          <p className="text-xs opacity-80 font-light cursor-pointer">
            {formatAgo(publishedAt, "ko")}
          </p>
        </div>
      </div>
    </li>
  );
}
