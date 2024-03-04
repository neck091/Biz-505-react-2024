/**
 * nextJs는 SSR CSR 모두 지원.
 * 기본적으론 SSR
 * React 의 기본 hook 함수들은 모두 CSR 컴포넌트에서 작동
 * useState(), useEffent() 와 같은 함수들이 CSR
 * 이 컴포넌트를 CLIENT 로 변환하여 함수를 사용할 수 있도록 하는 키워드
 */
"use client";
import { useState } from "react";

export default ({ search, setSearch }) => {
  // const [search, setSearch] = useState("");
  const onChangeHandler = (e) => {
    const value = e.target.value;

    setSearch(value);
  };
  return (
    <div className="search_box">
      <input
        placeholder="검색어"
        name="search"
        value={search}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};
