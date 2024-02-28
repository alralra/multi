//모듈 추출
const express = require("express");
//서버 생성
const app = express();
app.use(function (request, response) {
  // User-Agent 속성 추출
  const agent = request.header("User-Agent");
  response.send("<p>User - Agent" + " : " + agent + "</p>");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
