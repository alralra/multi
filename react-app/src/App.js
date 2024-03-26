import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef, useCallback } from "react";

import UseCallBackComponent2 from "./0325/UseCallBackComponent2";
import ChildComponent from "./0325/ChildComponent";
function App() {
  const [count, setCount] = useState(0);
  const updateHandler = useCallback(() => {
    console.log("update");
  }, []);
  return (
    <div>
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <ChildComponent update={updateHandler} />
    </div>
  );
}
export default App;
