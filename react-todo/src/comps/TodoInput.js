// import { useState } from "react";

const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  //   const [todo, setTodo] = useState("");
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };

  const addBtnClickHandler = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="input">
      <input placeholder="To Do..." value={todo} onChange={todoOnChangeHandler} />
      {/* todo State에 저장된 값이 2글자 이상일 때만 버튼을 클릭할 수 있게 하라*/}
      <button disabled={todo.length < 2} onClick={addBtnClickHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
