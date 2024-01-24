//함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법

var 함수이름 = (arg1, arg2, argn) => {
  //프로그램 코드
  //결과를 리턴하는 return 문
};

var adder = (a, b) => {
  var sum = a + b;
  return sum;
};
console.log(adder(1, 2));

function adder(a, b) {
  var sum = a + b;
  return sum;
}
console.log(adder(1, 2));

var sum = () => {
  console.log("안녕하세요!");
};
sum();

//중괄호 생략가능
//코드가 한줄일 경우
var sum = () => console.log("안녕하세요!");
sssss
sadasd
