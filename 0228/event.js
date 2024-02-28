// process 객체에 exit 이벤트 연결
process.on("exit", function () {
  console.log("안녕히가세요^^");
});
// process 객체에 uncaughtException 이벤트 연결
process.on("uncaughtException", function (error) {
  console.log("예외가 발생했습니다!!");
});
//2초 간격으로 3번 예외를 발생시킨다

let count = 0;
function test() {
  count = count + 1;
  if (count > 3) {
    return;
  }
  // 예외를 강제로 발생시킨다
  setTimeout(test, 2000);
  error.error.error();
}
setTimeout(test, 2000);






// ❖ 실행 결과 [실습] 이벤트 강제 발생

// exit 이벤트를 연결한다
process.on("exit", function () {
  console.log("안녕히 계세요..!");
});
// 이벤트를 강제로 발생시킨다
process.emit("exit");
process.emit("exit");
process.emit("exit");
process.emit("exit");
//프로그램 실행중
console.log("프로그램 실행중~");
