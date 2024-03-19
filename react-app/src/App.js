import logo from "./logo.svg";
import "./App.css";

import ChangeValue from "./0319/ChangeValue";
import Spread from "./0319/Spread";
import React, { useState } from "react";
import ChildComponent from "./0319/ChildComponent";
import ChangeArray from "./0319/ChangeArray";

function App() {
  const [value, setValue] = useState("");
  function addDataHandler(data) {
    setValue(data);
  }
  return (
    <div>
      <h3>ChildComponent로부터 전달받은 데이터 : {value} </h3>
      <ChildComponent onAddData={addDataHandler} />
    </div>
  );
}
export default App;
