// 모듈 추출
const http = require("http");
// server 객체 생성
const server = http.createServer();
// 포트 설정
const port = 3000;
// 웹 서버 실행
server.listen(port, function () {
console.log("웹 서버가 시작되었습니다. : %d", port);
});
// 10초 후 실행
let sclose = function(){
// 서버 종료
server.close();
};
setTimeout(sclose, 10000);