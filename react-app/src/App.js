import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import CheckBox from "./0320/CheckBox";
function App() {
  return (
    <>
      <CheckBox cap={10000} shose={30000} bag={80000} />
    </>
  );
}
export default App;
