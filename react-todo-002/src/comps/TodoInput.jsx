import { useRef } from "react";

import "../css/TodoInput.css";

const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  //특정 tag 형 컴포넌트에 id를 부여하기 위한 도구
  const inputRef = useRef();

  const onInsertHandler = () => {
    todoInsert();
    setTodoItem("");
  };

  const onChangeHander = (e) => {
    const text = e.target.value;

    setTodoItem(text);
  };
  return (
    <div className="todoInput">
      <input ref={inputRef} placeholder="TODO" value={todoItem} onChange={onChangeHander} />
      <button disabled={todoItem.length < 2} onClick={onInsertHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
