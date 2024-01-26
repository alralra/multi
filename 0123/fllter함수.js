// 조건에 맞는 모든 아이템들을 새로운 배열로 생성

const fruits = ["apple", "banana", "melon", "orange"];

//function
const filter1 = fruits.filter(function (name) {
  return name === "melon";
});

console.log(filter1);

//화살표 함수
const filter2 = fruits.filter((name) => name === "melon");
console.log(filter2);