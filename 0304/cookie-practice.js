//모듈 추출 및 서버 생성
const express = require("express");
const cookiePractice = require("cookie-parser");
const app = express();
const date = new Date();
date.setDate(date.getDate() + 30);
// cookie-parser 미들웨어 설정
app.use(cookiePractice());
// 라우터 설정
app.get("/study/showUserCookie", function (request, response) {
  // 응답
  response.send(request.cookies);
});
app.get("/study/setUserCookie", function (request, response) {
  // 쿠키 설정
  response.cookie("HELLOCODING", "ACADEMY", { expires: date, });
  // 응답
  response.redirect("/study/showUserCookie");
});
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
