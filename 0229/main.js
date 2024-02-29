// 모듈 추출 및 서버 생성
const express = require("express");
const app = express();
// 0229 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정
app.use(express.static(__dirname + "/public"));
app.use(function (request, response) {
  // 응답
  response.send('<img src="/flower.jpg" width="100%"/>');
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
