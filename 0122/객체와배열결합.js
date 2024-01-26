var 공룡 = [
  { 이름: "티라노사우루스 렉스", 연대: "백악기 후기" },
  { 이름: "파키케팔로우스", 연대: "쥐라기후기" },
  { 이름: "플라테오사우루스", 연대: "트라이아스기" },
];

console.log(공룡[1].연대);

var 민지 = { 이름: "민지", 나이: 11, 행운의숫자: [2, 4, 8, 16] };
var 지훈 = { 이름: "지훈", 나이: 15, 행운의숫자: [3, 9, 40] };
var 서연 = { 이름: "서연", 나이: 19, 행운의숫자: [1, 2, 30] };

var 친구 = [민지, 지훈, 서연];

console.log(친구[1]);
console.log(친구[0].행운의숫자[1]);

var 빌려준돈 = {};

빌려준돈["지훈"] = 5000;
빌려준돈["민지"] = 7000;

console.log(빌려준돈["지훈"]);

빌려준돈["지훈"] = 8000;
console.log(빌려준돈["지훈"]);

빌려준돈["지훈"] += 5000;
console.log(빌려준돈["지훈"]);

var 영화 = {
  "니모를 찾아서": {
    개봉연도: 2003,
    상영시간: 100,
    출연진: ["앨버스 브룩스", "엘런 드제너러스", "알렉산더 굴드"],
    형식: "DVD",
  },
  "스타워즈 에피소드": {
    개봉연도: 1983,
    상영시간: 134,
    출연진: ["마크 해밀", "해리슨 포드", "캐리피셔"],
    형식: "DVD",
  },
  "해리포터와 불의 잔": {
    개봉연도: 2005,
    상영시간: 157,
    출연진: ["다니엘 레드클리프", "엠마 왓슨", "루퍼트 그린트"],
    형식: "블루레이",
  },
};
console.log(영화["니모를 찾아서"].출연진[2]);
var 카 = {
  개봉연도: 2006,
  상영시간: 117,
  출연진: ["오웬 윌슨", "양재훈", "호날두"],
  형식: "블루레이",
};
영화["카"] = 카;
console.log(영화["카"]);

var width = 100;
var height = 200;

var area = {
  width: width,
  height: height,
};
totalArea = area.width * area.height;
console.log(area);
console.log(totalArea);

var dog = {
  name: "봐둑이",
  legs: 2,
  color: "brown",
  speak: function () {
    console.log("와라알알아알");
    //this.요소  다른요소를 불러올수있음
    console.log(this.name);
  },
};
//dog 객체 안 speak() 함수 호출
dog.speak();

//생성자 함수 : 코드한줄 선언 -> 객체 여러개
// 생성자함수 = 틀 , 껍데기이다

function Animals(name, age, address) {
  //코드
  this.name = name;
  this.age = age;
  this.address = address;
}
//코드 한줄로 객체를 생성 --> new  연산자를 사용
var dog = new Animals("하누리", 18, "서울역"); //dog 객체를 생성
var cat = new Animals("아옹이", 15, "수원역"); //cat 객체를 생성

var tiger = new Animals("홀앵이", 85, "부산역");
var panda = new Animals("풉아오", 49, "인천역");

console.log(tiger);
