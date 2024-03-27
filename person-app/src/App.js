import logo from "./logo.svg";
import "./App.css";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const nextId = useRef(1);

  const insertHandler = (item) => {
    const newTodo = {
      id: nextId.current,
      text: item,
      status: false,
    };

    setTodos([...todos, newTodo]);

    nextId.current += 1;
  };

  const removeHandler = (deleted) => {
    setTodos(todos.filter((prevTodo) => prevTodo.id !== deleted));
  };
  const submitHandler = (e) => {
    // 페이지 새로고침 방지
    e.preventDefault();
    // 빈칸을 입력한 경우, 추가 안함
    if (item.trim() === "") {
      return;
    }
    // 아이템 추가
    insertItem(item);
    // input 창에 텍스트 비우기
    setItem("");
  };
  return (
    <>
      <TodoTemplate>
        <p>이름</p>
        <TodoInsert insertItem={insertHandler} />
        <p>나이</p>
        <TodoInsert insertItem={insertHandler} />
        <p>지역</p>
        <TodoInsert insertItem={insertHandler} />
        <button type="submit">
        <IoIosAddCircleOutline />
      </button>
        <TodoList todos={todos} removeItem={removeHandler} />
      </TodoTemplate>
    </>
  );
}

export default App;
