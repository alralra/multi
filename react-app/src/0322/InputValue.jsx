import { useState, useRef } from "react";
const InputValue = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const nameRef = useRef();
  const ageRef = useRef();
  const style = {
    margin: "30px",
  };
  function changeHandler() {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  }
  return (
    <div style={style}>
      <h1>input 태그 value 값 지정</h1>
      이름 :{" "}
      <input
        type="text"
        ref={nameRef}
        onChange={(e) => changeHandler()}
      />
      나이 :{" "}
      <input
        type="number"
        ref={ageRef}
        onChange={(e) => changeHandler()}
        
      />
    </div>
  );
};
export default InputValue;
