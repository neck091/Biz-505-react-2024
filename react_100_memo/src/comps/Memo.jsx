import "../css/Memo.css";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
const Memo = () => {
  return (
    <section className="main">
      <MemoList />
      <MemoInput />
    </section>
  );
};

export default Memo;
