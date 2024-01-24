// 배열의 아이템들이 조건을 전부 만족하는지 확인

const fruits = ["apple", "banana", "melon", "orange"];

//function
const every1 = fruits.every(function (name) {
  return name === "melon";
});
console.log(every1);
//화살표 함수
const every2 = fruits.every((name) => name === "melon");
console.log(every2);
