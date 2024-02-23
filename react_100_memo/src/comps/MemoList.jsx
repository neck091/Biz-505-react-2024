const MemoList = () => {
  return (
    <div className="aside">
      <div className="date">
        <input type="text" value="2024-02-23" />
        <input type="text" value="09:03:50" />
        <input type="button" value="새로작성" />
      </div>
      <ul>
        <li>메모</li>
        <li>메모</li>
        <li>ㅇㄴ 아까랑 뭐가 다른건데</li>
      </ul>
    </div>
  );
};
export default MemoList;
