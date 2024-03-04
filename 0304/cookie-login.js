//모듈 추출 및 서버 생성
const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
// 미들웨어 설정
myPat = path.join(__dirname, "data");
app.use(cookieParser());

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));
// 라우터 설정
app.get("/", function (request, response) {
  if (request.cookies.auth) {
    response.send("<h1>Login Success</h1>");
  } else {
    response.redirect("/login");
  }
});
app.get("/login", function (request, response) {
  fs.readFile(myPat + "/login.html", "utf8", function (error, data) {
    response.send(data.toString());
  });
});
app.get("/deleteCookie", function (request, response) {
  response.clearCookie("auth");
  response.send("<h1>쿠키 삭제 완료</h1>");
});
app.post("/login", function (request, response) {
  // 쿠키 생성
  const id = request.body.id;
  const password = request.body.password;
  // 출력
  console.log(id, password);
  // 로그인 확인
  if (id == "hoon" && password == "1234") {
    // 로그인 성공
    response.cookie("auth", true);
    response.redirect("/");
  } else {
    // 로그인 실패
    response.redirect("/login");
  }
});

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
