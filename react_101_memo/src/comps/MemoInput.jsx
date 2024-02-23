const MemoInput = ({ memo, setMemo, memoInsert }) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;
    setMemo({ ...memo, m_subject: text });
    /**
     * 기존의 메모 객체를 새롭게 복제하고 m_subject 를 input tag 입력된 문자열로 대체하여 포함시켜라
     */
  };

  const onClickInsert = () => {
    memoInsert();
  };
  return (
    <div>
      <input type="text" placeholder="제목" value={memo.m_subject} onChange={onChangeHandler} />
      <input type="text" placeholder="메모 입력" />
      <input type="file" />
      <input type="button" value="추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
      <p>{memo.m_subject}</p>
    </div>
  );
};
export default MemoInput;
