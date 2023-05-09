import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import Description from "../components/Description";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="lg:basis-4/6">
        <div className="relative w-full h-auto pt-[50%]">
          <iframe
            className="absolute top-0 left-0 px-4"
            id="player"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={title}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <Description description={description} id={video.id} />
        </div>
      </article>
      <section className="lg:basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
