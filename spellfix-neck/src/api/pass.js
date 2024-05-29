"use server";
// server.js

import fetch from "node-fetch";
import cheerio from "cheerio";

export async function fetchData() {
  const URL =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=네이버맞춤법검사기";

  let lastCheckedValue = null;
  let lastCheckedTime = null;

  try {
    const now = new Date();

    // 마지막 조회 시간이 8시간 이전인지 확인합니다.
    if (
      !lastCheckedTime ||
      now - lastCheckedTime >= 8 * 60 * 60 * 1000
    ) {
      const response = await fetch(URL);
      const html = await response.text();
      console.log("API 응답:", html); // 응답을 콘솔에 출력

      const $ = cheerio.load(html);

      const todayValue = $("a[data-key]").attr("data-key");

      // 마지막으로 조회한 값과 비교합니다.
      if (todayValue && todayValue !== lastCheckedValue) {
        // 값이 변경되었을 경우, 업데이트합니다.
        lastCheckedValue = todayValue;
        lastCheckedTime = now;
        console.log("새로운 값:", todayValue);
        return { value: todayValue };
      } else {
        // 값이 변경되지 않았을 경우, 메시지를 출력합니다.
        console.log("변경된 값이 없습니다.");
        return { value: lastCheckedValue };
      }
    } else {
      // 8시간이 지나지 않았을 경우, 마지막 조회 값을 반환합니다.
      console.log("마지막 조회 값:", lastCheckedValue);
      return { value: lastCheckedValue };
    }
  } catch (error) {
    console.error("데이터를 조회하는 중 오류가 발생했습니다.", error);
    throw new Error("Internal Server Error");
  }
}
