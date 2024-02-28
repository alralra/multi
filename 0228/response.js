//모듈 추출
const express = require("express");
//서버 생성
const app = express();
//request 이벤트 리스너 설정
app.use(function (request, response) {
  // 응답
  response.redirect("http://www.naver.com");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
