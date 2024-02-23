const MemoList = ({ memoList }) => {
  const viewList = memoList.map((item) => <li>{item.memo}</li>);
  return (
    <div className="aside">
      <div className="date">
        <input type="text" value="2024-02-23" />
        <input type="text" value="09:03:50" />
        <input type="button" value="새로작성" />
      </div>
      <ul>{viewList}</ul>
    </div>
  );
};
export default MemoList;
