var x = 5;
var y = 4;

//삼황연산자
//조건 ? true : false  <--아래 식
var big = x > y ? "안녕" : "바잉"; // 결과값 X
console.log(big); //결과값 5

var name1 = "kitae";
var res1 = name1 == "kitae";
var res2 = name1 > "park";
console.log(res1);
console.log(res2);

var 인사 = "안녕하세요.";
var 내이름 = "양재훈";
console.log(인사 + 내이름);

//문자 연결하기 concat
var 인사 = "안녕하세요.";
console.log(인사.concat("양재훈입니다"));

var 인사 = " 안녕하세요.! ";
var 내이름 = "양재훈!";
console.log(인사 + 내이름);

//앞뒤 빈칸 없애기
var user = " hoon";
user = user.trim();
console.log(user);

//문자열 길이확인
console.log("아ㅏㅏㅏㅏㅏ ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ앙기모찌".length);
var 자바 = "자바";
console.log(자바.length);

var 자바스크립트 = "잡아 + 스크크크크크립트";
console.log(자바스크립트.length);

//문자열에서 한 글자만 가져오기
var 인사 = "안ㄴㄴ녕하세연";
console.log(인사[4]);

var 암호1 = "지도 속";
var 암호2 = "희망을";
var 암호3 = "훔쳐본다";
var 암호4 = "?!";

console.log(암호1[1] + 암호2[1] + 암호3[1] + 암호4[1]);

var 인사 = "안녕하세요오랜만입니다";
//넣고싶은 문자
인사.charAt(0);
인사.charAt(3);
인사.charAt(4);
인사.charAt(5);
//문자 자르기 slice
console.log(인사.slice(2, 8));
