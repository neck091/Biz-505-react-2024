const MemoInput = () => {
  return (
    <div className="aside">
      <div className="input">
        <input type="text" placeholder="제목을 작성해주세요" />
        <input type="text" placeholder="내용을 작성해주세요" />
        <input type="file" />
        <input type="button" value="저장" />
      </div>
    </div>
  );
};

export default MemoInput;
