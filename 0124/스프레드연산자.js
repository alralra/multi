// function add(a, b, c) {
//   return a + b + c;
// }
//   const nums = [10, 20, 30];
//   const result = add(nums[0], nums[1], nums[2]);
//   console.log(result);

function add(a, b, c, d) {
  return a + b + c + d;
}
const nums = [10, 20, 30, 40];
const result = add(...nums); // <-- ...을 통해 배열 안에있는 숫자를 전부 부른다
console.log(result);

function rest(num1, num2, ...nums) {
  console.log(nums);
}
rest(10, 20, 30, 40, 50);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const newArr = [...num1, ...num2]; //<--concat()과 같은 상황
console.log(newArr);

const dog = { name: "바둑이", age: 5, color: "brown" };
const newDog = {
  ...dog,
  owner: "siuu",
};
console.log(newDog);