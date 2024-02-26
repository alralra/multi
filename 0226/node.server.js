const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello World..!</h1>");
  })
  .listen(3000, function () {
    console.log("Server running at http://127.0.0.1:3000");
  });
console.log("이름 : %s", "양재훈");
console.log("생년월일 : %s", "1월4일");
console.log("사는곳 : %s", "안산");
console.log("취미 : %s", "운동 , 게임");

// 시간 측정 시작
console.time("alpha");
let output = 1;
for (let i = 1; i <= 10; i++) {
  output *= i;
}
console.log("Result : ", output);
// 시간 측정 종료
console.timeEnd("alpha");
process.argv.forEach(function(item, index) {
    // 출력
    console.log(`${index} : ${typeof(item)} : ${item}`);
    // 실행 매개변수에 --exit가 있을 때
    if(item == '--exit')
    {
    // 다음 실행 매개변수를 얻는다.
    let exitTime = Number(process.argv[index+1]);
    // 일정 시간 후 프로그램을 종료한다.
    setTimeout(function(){
    process.exit();
    }, exitTime);
    }
    });
    console.log('- process.versions : ' , process.versions);