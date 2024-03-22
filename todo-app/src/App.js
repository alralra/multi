import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import TodoTemplate from "../src/components/TodoTemplate";
import TodoInsert from "../src/components/TodoInsert";
import TodoList from "../src/components/TodoList";
import ToDoListItem from "../src/components/TodoListItem";
function App() {
  const insertHandler = (item) => {
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: "리액트 기초 공부하기",
        status: true,
      },
      {
        id: 2,
        text: "포트폴리오 만들기",
        status: true,
      },
      {
        id: 3,
        text: "프로젝트 준비하기",
        status: false,
      },
    ]);
    nextId.current += 1;
 
  const nextId = useRef(4);

  return (
    <>
      <TodoTemplate>
        <TodoInsert insertItem={insertHandler} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
}
 };
export default App;
