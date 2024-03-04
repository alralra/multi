//모듈 추출 및 서버 생성
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// cookie-parser 미들웨어 설정
app.use(cookieParser());
// 라우터 설정
app.get("/getCookie", function (request, response) {
  // 응답
  response.send(request.cookies);
});
app.get("/setCookie", function (request, response) {
  // 쿠키 설정
  response.cookie("string", "cookie");
  response.cookie("json", {
    name: "cookie",
    property: "delicious",
  });
  // 응답
  response.redirect("/getCookie");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
