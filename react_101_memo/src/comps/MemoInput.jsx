const MemoInput = ({ memo, setMemo, memoInsert }) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;

    const name = target.name;
    setMemo({ ...memo, [name]: text });
    // if(name=== "m_subject"){
    //   setMemo({...memo, m_subject:text})
    // }else if(~~)

    /**
     * 기존의 메모 객체를 새롭게 복제하고
     * [name]속성에 저장된 문자열을 key로 하여
     * input tag에 입력된 값을 새로운 객체에 포함시켜라
     */
  };

  const onClickInsert = () => {
    memoInsert();
  };
  return (
    <div>
      <input type="text" placeholder="제목" value={memo.m_subject} name="m_subject" onChange={onChangeHandler} />
      <input type="text" placeholder="메모 입력" value={memo.m_memo} name="m_memo" onChange={onChangeHandler} />
      <input type="file" />
      <input type="button" value="추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
      <p>{memo.m_subject}</p>
    </div>
  );
};
export default MemoInput;
