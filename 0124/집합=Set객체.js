// Set 객체
// =중복되지 않는 유일한 값들의 집합

// 데이터 저장 구조
// 1.변수
// 2.배열
// 3.객체
// 4. Set 객체

// 1. 중복된 데이터 저장 X
// 2. 각각의 아이템은 순서가 없음
// 3. 인덱스로 요소에 접근할 수 없음

const set1 = new Set();
console.log(set1); //Set(0){}

const set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2); //중복되지 않으면 그대로 출력

const set3 = new Set("hello");
console.log(set3); // l은 중복이라 1개만 들어감

//set 생성
const set = new Set([10, 20, 30]);

//사이즈 확인
console.log(set.size);

//데이터 존재 여부
console.log(set.has(10));
console.log(set.has(40));

//데이터 추가
set.add(40);
console.log(set);

//데이터 순회
set.forEach((item) => console.log(item));

//삭제
set.delete(20);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

