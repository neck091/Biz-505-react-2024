import "../css/Memo.css";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import { useState } from "react";

const Memo = () => {
  const [memoItem, setMemoItem] = useState("");
  const [memoList, setMemoList] = useState([]);

  const memoInsert = () => {
    const newMemoList = [...memoList, { memo: memoItem }];
    setMemoList(newMemoList);
  };

  return (
    <section className="main">
      <MemoList memoList={memoList} />
      <MemoInput memoItem={memoItem} setMemoItem={setMemoItem} memoInsert={memoInsert} />
    </section>
  );
};

export default Memo;
