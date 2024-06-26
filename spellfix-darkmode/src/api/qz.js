"use server";
// 필요한 패키지 및 모듈 불러오기
import { launch } from "puppeteer";

// 브라우저 및 페이지 인스턴스 변수 선언
let browser;
let page;

// 브라우저 초기화 함수
const initializeBrowser = async () => {
  browser = await launch({
    headless: true, // 백그라운드에서 브라우저 실행
  });
  page = await browser.newPage(); // 새 페이지 생성
};

// 브라우저 종료 함수
const closeBrowser = async () => {
  if (browser) {
    await browser.close();
  }
};

// 특정 요소를 클릭하고 업데이트된 HTML 및 CSS를 가져오는 함수
const fetchUpdatedContent = async (elementName) => {
  if (!browser) {
    await initializeBrowser();
  }

  try {
    await page.goto(
      "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blo3&qvt=0&query=%EB%A7%9E%EC%B6%A4%EB%B2%95%ED%80%B4%EC%A6%88", // 원하는 웹 사이트 URL로 변경 필요
      { waitUntil: "networkidle2" }
    );

    // 추가 대기 시간
    await page.waitForTimeout(5000);

    if (elementName) {
      await page.evaluate((elementName) => {
        const element = document.querySelector(elementName);
        if (element) {
          element.click(); // 특정 요소 클릭
        }
      }, elementName);
    }

    // 특정 요소만 추출하여 HTML 가져오기
    const updatedHtml = await page.evaluate(() => {
      const element = document.querySelector(
        "#ct > section.sc.cs_n_korean_quiz.csm._cs_n_korean_quiz"
      );
      return element
        ? element.outerHTML
        : "<div>Element not found</div>";
    });

    // 페이지 전체의 CSS 가져오기
    const updatedCss = await page.evaluate(() => {
      const styles = Array.from(
        document.querySelectorAll("style, link[rel='stylesheet']")
      )
        .map((style) => style.outerHTML)
        .join("\n");
      return styles;
    });

    return { html: updatedHtml, css: updatedCss };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error occurred while fetching updated content.");
  }
};

// 서버로 export
export { fetchUpdatedContent, closeBrowser };
