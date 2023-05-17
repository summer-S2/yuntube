// 다음 페이지 토큰 사용 안하는 버전 (데이터 미리 가공)
// export default class Yuntube {
//   constructor(apiClient) {
//     this.apiClient = apiClient; // 외부로부터 apiClient를 주입받음
//   }

//   //--- 공개 함수 (외부에서 호출 가능한 함수) ---//
//   async search(keyword) {
//     // 키워드를 전달받아서 키워드가 있다면 #searchByKeyword함수를 사용하고 없다면 #mostPopular()함수를 사용하여 결과값을 리턴
//     return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
//   }

//   // 채널 id를 전달받아 채널 이미지 url을 반환하는 함수
//   async channelImageURL(id) {
//     return this.apiClient
//       .channels({ params: { part: "snippet", id } })
//       .then((res) => res.data.items[0].snippet.thumbnails.default.url);
//   }

//   async relatedVideos(id) {
//     return this.apiClient
//       .search({
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           type: "video",
//           relatedToVideoId: id,
//         },
//       })
//       .then((res) =>
//         res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
//       );
//   }

//   //--- 프라이빗 함수 (외부에서 호출 불가능한 함수) ---//
//   async #searchByKeyword(keyword) {
//     return this.apiClient
//       .search({
//         //search(비동기함수 promise를 리턴)에 값을 전달
//         params: {
//           part: "snippet",
//           maxResults: 25,
//           type: "video",
//           q: keyword,
//         },
//       })
//       .then((res) =>
//         res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
//       );
//   }

//   async #mostPopular() {
//     return this.apiClient
//       .videos({
//         params: {
//           part: "snippet",
//           maxResults: 50,
//           chart: "mostPopular",
//           regionCode: "KR",
//         },
//       })
//       .then((res) => res.data.items);
//   }
// }

// 다음 페이지 토큰 사용 버전
export default class Yuntube {
  constructor(apiClient) {
    this.apiClient = apiClient; // 외부로부터 apiClient를 주입받음
  }

  //--- 공개 함수 (외부에서 호출 가능한 함수) ---//
  async search(keyword, page) {
    // 키워드를 전달받아서 키워드가 있다면 #searchByKeyword함수를 사용하고 없다면 #mostPopular()함수를 사용하여 결과값을 리턴
    return keyword
      ? this.#searchByKeyword(keyword, page)
      : this.#mostPopular(page);
  }

  // 채널 id를 전달받아 채널 이미지 url을 반환하는 함수
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  //--- 프라이빗 함수 (외부에서 호출 불가능한 함수) ---//
  async #searchByKeyword(keyword, page) {
    return this.apiClient
      .search({
        //search(비동기함수 promise를 리턴)에 값을 전달
        params: {
          part: "snippet",
          maxResults: 48,
          type: "video",
          q: keyword,
          pageToken: page,
        },
      })
      .then((res) => res.data);
  }

  async #mostPopular(page) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 48,
          chart: "mostPopular",
          regionCode: "KR",
          pageToken: page,
        },
      })
      .then((res) => res.data);
  }
}
