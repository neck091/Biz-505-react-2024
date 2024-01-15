import { useState } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["정보처리기사 필기", "react 학습", "js 학습", "월요일 저녁"]);

  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />

      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
