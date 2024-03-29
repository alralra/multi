import React, { useState } from "react";
function Counter() {
  const [value, setValue] = useState(0);
  function numUp() {
    setValue(value + 1);
  }
  function numDown() {
    setValue(value - 1);
  }
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={numUp}>+1</button>
      <button onClick={numDown}>-1</button>
    </div>
  );
}
export default Counter;
