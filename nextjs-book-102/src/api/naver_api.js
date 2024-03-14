"use server";
// const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
// const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

//process.env 환경변수를 구조분해하여 개별 변수에 할당하기
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json";

//만약 client 모드로 사용하는 컴포넌트, 함수 모듈 등엔
//함수의 시작 부분에 async를 절대 사용하면 안된다.

export const getNaverBooks = async (search) => {
  const fetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };

  const response = await fetch(
    `${NAVER_BOOK_URL}?query=${search || ""}`,
    fetchOption
  );
  const books = await response.json();
  //naver api.js 는 server 모듈 이 모듈에서 console.log 를 사용하면 console에 출력된다.
  // console.log("BOOKS", books);
  return books.items;
};
