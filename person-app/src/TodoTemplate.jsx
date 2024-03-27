import React from "react";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="appTitle">전체회원수</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
