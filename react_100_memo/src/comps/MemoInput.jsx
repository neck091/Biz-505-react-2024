const MemoInput = ({ memoItem, setMemoItem, memoInsert }) => {
  const onInsertHandler = () => {
    memoInsert();
  };

  const onChangeHander = (e) => {
    const text = e.target.value;

    setMemoItem(text);
  };
  return (
    <div className="aside">
      <div className="input">
        <input type="text" placeholder="제목을 작성해주세요" value={memoItem} onChange={onChangeHander} />
        <input type="text" placeholder="내용을 작성해주세요" onChange={onChangeHander} />
        <input type="file" />
        <input type="button" value="저장" onClick={onInsertHandler} />
      </div>
    </div>
  );
};

export default MemoInput;
