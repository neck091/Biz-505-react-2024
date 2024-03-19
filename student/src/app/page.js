"use client";

import { useEffect, useState } from "react";
import StuDetail from "./StuDetail/page";
import StuList from "./StuList/page";
import StuSearch from "./StuSearch/page";
import StuCrud from "./CRUD/page";
import "./Main.css";
export default function Home() {
  const [num, setNum] = useState("");
  const [search, setSearch] = useState(""); // 검색어 상태 추가
  return (
    <main>
      <h1 className="dd">청춘대학 소프트웨어 공학과</h1>
      <section className="main">
        <aside className="list">
          <StuList search={search} setNum={setNum} />
        </aside>
        <aside className="r">
          <div>{num && <StuDetail num={num} />}</div>
          <div>
            <StuSearch search={search} setSearch={setSearch} />{" "}
            {/* 검색어 상태와 변경 함수 전달 */}
          </div>
          <div>
            <StuCrud num={num} />
          </div>
        </aside>
      </section>
    </main>
  );
}
