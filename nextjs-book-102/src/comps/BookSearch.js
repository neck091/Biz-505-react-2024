//Booksearch 컴포넌트를 CSR의 client 컴포넌트로 사용하겠다
"use client";

const BookSearch = ({ search, setSearch }) => {
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    return (...args) => {
      //debounce 함수가 호출되면 무조건 타이머를 리셋

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(
        () => callback.apply(this, args),
        delay
      );
    };
  };

  //debounce 객체를 사용하여 handler 제어
  //키보드에서 문자를 입력한 수 100 ms 동안 기다리면 그 때 onChange 핸들러 실행
  //debounce 객체의 callback 이 onChangeHavdler 가 된다.

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onDebouncehander = debounce(onChangeHandler, 100);
  return (
    <div className="book search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={onDebouncehander}
        // onChange={(e)=>onDebouncehander(e)}
      ></input>
    </div>
  );
};
export default BookSearch;
