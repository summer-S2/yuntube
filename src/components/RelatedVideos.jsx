import React from "react";
import { useYouTubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { yuntube } = useYouTubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => yuntube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>에러가 발생했습니다 ..</p>}
      {videos && (
        <ul className="">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
