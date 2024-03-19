import React, { useState } from "react";
function ChangeValue() {
  const [value, setValue] = useState("안녕하세요");
  function changeValue() {
    setValue("반가워요");
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={changeValue}>클릭</button>
    </div>
  );
}
export default ChangeValue;
