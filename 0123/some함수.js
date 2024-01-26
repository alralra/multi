const fruits = ["apple", "banana", "melon", "orange"];

//function
const some1 = fruits.some(function (name) {
  return name === "melon";
});

console.log(some1);

//화살표 함수
const some2 = fruits.some((name) => name === "melon");
console.log(some2);
