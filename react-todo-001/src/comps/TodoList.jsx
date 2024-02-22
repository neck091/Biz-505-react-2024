//seq와 todo 구성요소를 갖는 JSON 객체 데이터 3개를 포함하는 배열
// JSON : JavaScript Object Notation

// import { useState } from "react";

// {변수 : 값}, {변수1 : 값, 변수2: 값}
const todoListSample = [
  { seq: 1, todo: "React 시작" },
  { seq: 2, todo: "UI 구현" },
  { seq: 3, todo: "Spring 서버" },
  { seq: 4, todo: "점메추" },
  { seq: 5, todo: "비 온다" },
  { seq: 6, todo: "비 더 온다" },
];

const TodoList = ({ todoList }) => {
  // todoListSample 데이터가 채워진 todoList 상태 변수배열 시작하기
  //   const [todoList, setTodoList] = useState(todoListSample);

  //시나리오가 변경되어 todoList 상태배열을 Todomain 으로부터 props로 전달받아 사용
  //exec의 Array.js 참조
  //todoList.forEach((todo) => console.log(todo));
  //todoList.filter();
  const viewList = todoList.map((item) => <div className="todoItem">{item.todo}</div>);
  return <>{viewList}</>;
};

export default TodoList;
