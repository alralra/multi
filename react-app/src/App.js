import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Movie from "./0318/Movie";
import Movie2 from "./0318/Movie2";
import Practice from "./0318/practice";
import PriceList from "./0318/PriceList";

function App() {
  const priceList = [1000, 2000, 3000, 4000];
  const prices = priceList.map((price) => <div>가격 : {price}원</div>);
  return (
    <>
      <PriceList prices={prices} />
    </>
  );
}
export default App;
