"use server";
//// qz.js
import fetch from "node-fetch"; // fetch를 사용하기 위해 node-fetch 모듈을 가져옵니다.
import cheerio from "cheerio"; // Cheerio를 사용하기 위해 모듈을 가져옵니다.

export const crawlPage = async () => {
  try {
    const response = await fetch(
      "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blo3&qvt=0&query=%EB%A7%9E%EC%B6%A4%EB%B2%95%ED%80%B4%EC%A6%88"
    ); // 크롤링할 페이지 URL로 fetch 요청을 보냅니다.
    const html = await response.text(); // 받은 응답 데이터를 텍스트로 변환합니다.

    // Cheerio를 사용하여 HTML 파싱
    const $ = cheerio.load(html);

    // // 원하는 요소를 선택하여 해당 부분만 추출
    // const targetHtml = $(".mod_card_bx.no_padding_bottom").html();
    const targetHtml = $(
      "#ct > section.sc.cs_n_korean_quiz.csm._cs_n_korean_quiz > div > div.quiz_content_bx"
    ).html();

    if (!targetHtml) {
      console.log("No target HTML found."); // targetHtml이 비어 있는 경우 콘솔에 메시지를 출력합니다.
    } else {
      console.log(targetHtml); // 추출된 HTML을 서버 콘솔에 출력합니다.
    }

    return targetHtml; // 추출된 HTML을 반환합니다.
  } catch (error) {
    console.error("Error:", error); // 오류가 발생한 경우 콘솔에 오류 메시지를 출력합니다.
    throw new Error("Error occurred while crawling the page.");
  }
};
