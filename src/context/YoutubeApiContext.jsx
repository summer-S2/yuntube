import { createContext, useContext } from "react";
import Yuntube from "../api/yuntube";
// import fakeYuntubeClient from "../api/fakeYuntubeClient";
import YuntubeClient from "../api/yuntubeClient";

export const YoutubeApiContext = createContext();

// const client = new fakeYuntubeClient();
const client = new YuntubeClient();
const yuntube = new Yuntube(client); // Yuntube라는 클래스로 만든 인스턴스

// 데이터 1개를 제공해주는 프로바이더.
// 데이터 1개 = yuntube 인스턴스
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ yuntube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYouTubeApi() {
  return useContext(YoutubeApiContext);
}
