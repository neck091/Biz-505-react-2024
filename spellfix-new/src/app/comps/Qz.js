"use client";
import React, { useEffect, useState } from "react";
import { crawlPage } from "@/api/qz"; // crawlPage 함수를 가져옵니다.

const Qz = () => {
  const [html, setHtml] = useState(""); // HTML을 상태로 관리합니다.
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태를 관리합니다.

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await crawlPage(); // crawlPage 함수를 호출하여 HTML을 가져옵니다.
        setHtml(response); // 상태 업데이트를 통해 HTML을 설정합니다.
        setIsLoading(false); // 로딩 상태를 false로 변경합니다.
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false); // 로딩 상태를 false로 변경합니다.
      }
    };

    fetchHTML(); // 컴포넌트가 처음 마운트될 때 fetchHTML()을 호출합니다.
  }, []); // 빈 배열을 두어 컴포넌트가 처음 마운트될 때만 useEffect가 호출되도록 설정합니다.

  return (
    <div id="content">
      {/* 데이터 로딩 중일 때는 로딩 메시지를 표시합니다. */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // {/* 상태로 관리된 HTML을 표시합니다. */}
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      )}
    </div>
  );
};

export default Qz;
