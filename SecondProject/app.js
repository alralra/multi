// 모듈 추출 및 서버 생성
const express = require("express");
const mysql = require("./routes/mysqlconn");
const fs = require("fs");

// 서버 생성
const app = express();

// 데이터베이스 연결
mysql.connect();

// view 엔진 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// public 폴더 지정 - css, image
app.use(express.static("public"));

// ejs
app.get("/", function (request, response) {
  response.render("main");
});
app.get("/", function (request, response) {
  response.render("news");
});
app.get("/", function (request, response) {
  response.render("player");
});
//페이지 이동
app.get("/news", function (req, res) {
  res.render("news.ejs")
});
app.get("/player", function (req, res) {
  res.render("player.ejs")
});
// body-parser
app.use(express.urlencoded({ extended: false }));

// 라우터 연결
const listRouter = require("./routes/list");
const insertRouter = require("./routes/insert");
const deleteRouter = require("./routes/delete");
const updateRouter = require("./routes/update");

// 라우터 설정
app.use("/", listRouter);
app.use("/insert", insertRouter);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
