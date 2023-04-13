import React from "react";
import { useYouTubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name, type }) {
  const { yuntube } = useYouTubeApi();
  const isHome = type === "home";
  const { data: url } = useQuery(
    ["channel", id],
    () => yuntube.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  console.log(url);
  return (
    <div className={`flex my-4 mb-8 items-center ${isHome && "mt-2"}`}>
      {url && (
        <img
          className="shrink w-10 h-10 rounded-full cursor-pointer"
          src={url}
          alt={name}
        />
      )}
      <p className={`text-lg font-medium ml-4  ${isHome && "hidden"}`}>
        {name}
      </p>
    </div>
  );
}
