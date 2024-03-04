//모듈 추출 및 서버 생성
const express = require("express");
const app = express();

const path = require("path");

// public 폴더를 웹 서버의 루트 경로로 접근할 수 있도록 지정
myPat = path.join(__dirname, "data");
app.use(express.static(myPat));
console.log(myPat);

// application/x-www-form-urlencoded 방식 파싱
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response) {
  response.redirect("login.html");
});

app.post("/:name", function (request, response) {
  let name = request.params.name;
  let paramId = request.body.id;
  let paramPw = request.body.password;

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.write("<h1>회원가입 페이지에서 응답한 결과</h1>");
  response.write("<hr>");
  response.write("<p>Name : " + name + "</p>");
  response.write("<p>ID : " + paramId + "</p>");
  response.write("<p>PW : " + paramPw + "</p>");
  response.end();
});
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
