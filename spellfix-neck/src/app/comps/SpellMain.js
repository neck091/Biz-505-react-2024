"use client";
import { useState } from "react";

import SpellText from "./SpellText";
import SpellResult from "./SpellResult";
import NounList from "./NounList";
import Modal from "./Modal";
import Test from "./Test";

const SpellMain = () => {
  const [text, setText] = useState("");
  const [res, setRes] = useState("");
  const [word, setWord] = useState("");

  return (
    <div className="main">
      <header>
        <h1>Spelling Project</h1>
      </header>
      <section className="main">
        <aside className="left">
          <SpellText text={text} setText={setText} />
          <div className="section ggi">
            <h3>맞춤법 검사 결과</h3>
            <SpellResult text={text} setRes={setRes} />
            <div className="check_area">
              <dl>
                <dt className="blind">붉은색 텍스트</dt>
                <dd>
                  <span className="circle"></span>맞춤법
                </dd>
                <dt className="blind">보라색 텍스트</dt>
                <dd>
                  <span className="circle violet"></span>표준어의심
                </dd>
              </dl>
              <dl>
                <dt className="blind">녹색 텍스트</dt>
                <dd>
                  <span className="circle green"></span>띄어쓰기
                </dd>
                <dt className="blind">파란색 텍스트</dt>
                <dd>
                  <span className="circle blue"></span>통계적교정
                </dd>
              </dl>
            </div>
          </div>
        </aside>
        <aside className="right">
          <NounList text={text} setWord={setWord} />
          <Modal word={word} />
          {/* <Test word={word} /> */}
        </aside>
      </section>
    </div>
  );
};
export default SpellMain;
