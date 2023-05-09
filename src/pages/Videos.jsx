import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Spinner from "../components/Spinner";
import { useYouTubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams(); // 파라미터에 전달된 :keyword 값
  const { yuntube } = useYouTubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => yuntube.search(keyword), {
    staleTime: 1000 * 60,
  });
  console.log("Videos 페이지 데이터 : ", videos);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>에러가 발생했습니다 ..</p>}
      {videos && (
        <ul className="pt-4 grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
