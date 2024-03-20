import React, { useState } from "react";
function AddName() {
  const [names, setNames] = useState(heavyWork());
  function heavyWork() {
    for (let i = 0; i < 1000; i++) {
      console.log("엄청 복잡한 계산 중.. 시간 오래 걸림..");
    }
    return ["양재훈", "리액트"];
  }
  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default AddName;
