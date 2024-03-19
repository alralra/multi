import React from "react";
function Spread() {
  const person1 = { name: "Hoon" };
  const person2 = { name: "Hoon", age: 20 };
  const person3 = { name: "Hoon", age: 20, region: "seoul" };
  const person4 = { name: "Hoon", age: 20, region: "Busan" };
  return (
    <div>
      <h1>{JSON.stringify(person1)}</h1>
      <h1>{JSON.stringify(person2)}</h1>
      <h1>{JSON.stringify(person3)}</h1>
      <h1>{JSON.stringify(person4)}</h1>
    </div>
  );
}
export default Spread;
