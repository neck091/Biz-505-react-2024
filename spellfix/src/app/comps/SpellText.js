import { useState } from "react";
import { extractNouns } from "@/api/split_api"; // extractNouns 함수를 import합니다.

const SpellText = ({ onNounsExtracted }) => {
  const [inputText, setInputText] = useState("");

  // 텍스트 입력 변화 핸들러
  const handleTextChange = async (e) => {
    const text = e.target.value;
    setInputText(text);

    try {
      // 명사 추출 함수 호출
      const nouns = await extractNouns(text); // extractNouns 함수를 호출합니다.
      onNounsExtracted(nouns); // 추출된 명사를 부모 컴포넌트로 전달
    } catch (error) {
      console.error("명사 추출 중 오류 발생:", error);
    }
  };

  return (
    <div className="section">
      <h3>글씨 입력하기</h3>
      <form>
        <textarea
          id="inputText"
          name="text"
          rows="5"
          value={inputText}
          onChange={handleTextChange}
        ></textarea>
        <p>
          현재 입력한 글자 수: <span>{inputText.length}</span> / 최대
          글자 수: <span>{inputText.length}</span>
        </p>
      </form>
    </div>
  );
};

export default SpellText;
