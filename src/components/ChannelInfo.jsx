import React from "react";
import { useYouTubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { yuntube } = useYouTubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => yuntube.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  // console.log(url);
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-4">{name}</p>
    </div>
  );
}
