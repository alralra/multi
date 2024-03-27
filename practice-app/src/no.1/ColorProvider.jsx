import React, { createContext } from "react";
import ColorBox from "./ColorBox";

export const ColorContext = createContext("green");

const ColorProvider = () => {
  const color = prompt("원하는 색상을 입력하세요");
  console.log(color);

  return (
    <ColorContext.Provider value={color}>
      <ColorBox />
    </ColorContext.Provider>
  );
};

export default ColorProvider;
