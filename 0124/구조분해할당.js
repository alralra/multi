//[ 변수이름1, 변수이름2 ] = [ 값1,  값2 ]

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);



//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;

console.log(red);
console.log(foo[2]);
