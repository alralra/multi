import React, { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoInsert = ({ insertItem }) => {
  // 추가한 todo 아이템
  const [item, setItem] = useState("");
  const changeHandler = (e) => setItem(e.target.value);
  // submit 이벤트 처리
  
  return (
    <form className="TodoInsert" onSubmit={submitHandler}>
      <input
        type="text"
        value={item}
        onChange={changeHandler}
      />
      
    </form>
  );
};

export default TodoInsert;
