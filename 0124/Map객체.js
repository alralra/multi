//Map 생성
const map = new Map();

//set() : key와 value설정
map.set("name", "siuu"); // 문자형 키
map.set(1, "number"); // 숫자형 키
map.set(true, "trueValue"); // 불리언형 키

// get() : map에서 key에 해당하는 값 가져오기
console.log(map.get("name"));
console.log(map.get(1));

//score 값 추가
map.set("score", 100);

//size 확인
console.log(map.size);

//age 값 삭제
map.delete("age");

//map확인
console.log(map);

