// components/NounList.js
"use client";
import { useState } from "react";
import { getNouns } from "@/api/split_api";

const NounList = ({ text }) => {
  const [nouns, setNouns] = useState([]);

  // 입력된 텍스트가 변경될 때마다 명사를 추출하고 상태를 업데이트합니다.
  useEffect(() => {
    const extractedNouns = getNouns(text);
    setNouns(extractedNouns);
  }, [text]);

  return (
    <div className="section">
      <h3>추출된 명사</h3>
      <ul>
        {nouns.map((noun, index) => (
          <li key={index}>{noun}</li>
        ))}
      </ul>
    </div>
  );
};

export default NounList;
