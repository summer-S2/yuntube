import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === "list";
  // console.log(isList);
  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={isList ? "w-60 mr-2" : "w-full cursor-pointer"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2 cursor-pointer">
          {title}
        </p>
        <p className="text-sm opacity-80 cursor-pointer">{channelTitle}</p>
        <p className="text-sm opacity-80 cursor-pointer">
          {formatAgo(publishedAt, "ko")}
        </p>
      </div>
    </li>
  );
}
