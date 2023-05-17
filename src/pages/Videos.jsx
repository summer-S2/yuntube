import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import Spinner from "../components/Spinner";
import { useYouTubeApi } from "../context/YoutubeApiContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Videos() {
  const [page, setPage] = useState("");
  const { keyword } = useParams(); // 파라미터에 전달된 :keyword 값
  const { yuntube } = useYouTubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword, page], () => yuntube.search(keyword, page), {
    staleTime: 1000 * 60,
  });
  // console.log("Videos 페이지 데이터 : ", videos);

  const handlePrev = () => {
    console.log(videos);
    setPage(videos.prevPageToken);
  };
  const handleNext = () => {
    console.log(videos);
    setPage(videos.nextPageToken);
  };
  if (!videos) {
    return <Spinner />;
  }

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>에러가 발생했습니다 ..</p>}
      {videos &&
        (!keyword ? (
          // 키워드가 없는 경우 : 인기 동영상
          <ul className="pt-4 grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 gap-4">
            {videos.items.map((video) => (
              <VideoCard key={video.id} video={video} id={video.id} />
            ))}
          </ul>
        ) : (
          // 키워드가 있는 경우 : 검색 결과
          <ul className="pt-4 grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 gap-4">
            {videos.items.map((video) => (
              <VideoCard
                key={video.id.videoId}
                video={video}
                id={video.id.videoId}
              />
            ))}
          </ul>
        ))}

      {/* 페이지 이동 버튼 */}
      <div className="flex justify-center items-center gap-10 lg:gap-20 my-4 ">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft className="text-xl" />
          <button className="p-4">이전 페이지</button>
        </div>
        <div className="text-[#555]">|</div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleNext}
        >
          <button className="p-4">다음 페이지</button>
          <MdKeyboardArrowRight className="text-xl" />
        </div>
      </div>
    </>
  );
}
