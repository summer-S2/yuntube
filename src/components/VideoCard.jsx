import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt, channelId } =
    video.snippet;
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === "list";
  // console.log(isList);
  return (
    <li className={`mx-4 md:mx-0`} onClick={handleClick}>
      <img
        className="cursor-pointer rounded-2xl w-full"
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="flex">
        <div className={`shrink-0 ${isList && "hidden"}`}>
          <ChannelInfo id={channelId} name={channelTitle} type="home" />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-semibold my-2 line-clamp-2 cursor-pointer overflow-hidden">
            {title}
          </p>
          <p className=" opacity-80 font-light cursor-pointer">
            {channelTitle}
          </p>
          <p className="text-sm opacity-80 font-light cursor-pointer">
            {formatAgo(publishedAt, "ko")}
          </p>
        </div>
      </div>
    </li>
  );
}
