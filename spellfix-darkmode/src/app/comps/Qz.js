"use client";
// pages/qz.js

import React, { useState, useEffect, useRef } from "react";
import { fetchUpdatedContent } from "@/api/qz"; // 서버와의 통신을 위한 API 함수

const Qz = () => {
  const [content, setContent] = useState({ html: "", css: "" }); // HTML과 CSS 상태
  const containerRef = useRef(null);

  // 초기 HTML과 CSS 가져오기
  useEffect(() => {
    const fetchInitialContent = async () => {
      try {
        const response = await fetchUpdatedContent();
        setContent(response); // 상태 업데이트
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchInitialContent();
  }, []);

  // 클릭 핸들러
  const handleClick = async (elementName) => {
    try {
      const response = await fetchUpdatedContent(elementName); // 서버에서 업데이트된 HTML과 CSS 가져오기
      setContent(response); // 상태 업데이트
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // HTML 렌더링 후 클릭 이벤트 핸들러 추가
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleElementClick = (event) => {
        const elementName = event.target.tagName.toLowerCase(); // 클릭된 요소의 이름 가져오기
        handleClick(elementName);
      };

      // 모든 클릭 가능한 요소에 이벤트 리스너 추가
      container.addEventListener("click", handleElementClick);

      // Cleanup function to remove event listener
      return () => {
        container.removeEventListener("click", handleElementClick);
      };
    }
  }, [content]);

  return (
    <div ref={containerRef}>
      {/* 웹 사이트 렌더링된 HTML 및 CSS 적용 */}
      <style dangerouslySetInnerHTML={{ __html: content.css }} />
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
};

export default Qz;
