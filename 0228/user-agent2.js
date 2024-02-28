//모듈 추출
const express = require("express");
//서버 생성
const app = express();
// 미들웨어 설정
app.use(function (request, response) {
  let name = request.query.name;
  let region = request.query.region;
  // 응답
  response.send("<h1>" + name + "-" + region + "</h1>");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
