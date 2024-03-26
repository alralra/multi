import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import HomeComponent from "./0326/HomeComponent";
import { ThemeContext } from "./0326/ThemeContext";
import UseCallBackComponent2 from "./0325/UseCallBackComponent2";
import ChildComponent from "./0325/ChildComponent";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponent />
    </ThemeContext.Provider>
  );
}
export default App;
