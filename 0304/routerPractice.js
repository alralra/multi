// 모듈 추출 및 서버 생성
const express = require("express");
const app = express();
// 라우터 설정
app.get("/page/:id", function (request, response) {
  let name = request.params.id;
  // 응답
  response.send("<h1>" + name + " Page</h1>");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
