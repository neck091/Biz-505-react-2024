import moment from "moment";
const MemoDate = ({ memo, setMemo }) => {
  const onClickNew = () => {
    const newMemo = { ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss") };
    setMemo(newMemo);
  };
  return (
    <div className="memo_date">
      <input type="date" value={memo.m_date} />
      <input type="time" value={memo.m_time} />
      <input type="button" value="새로 작성" onClick={onClickNew} />
    </div>
  );
};
export default MemoDate;
