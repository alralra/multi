// 모듈 추출 및 서버 생성
const express = require("express");
const mysql = require("./routes/mysqlconn");
const fs = require("fs");
const session = require("express-session");

// 서버 생성
const app = express();

// 데이터베이스 연결
mysql.connect();

// view 엔진 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//로그인
app.use(
  session({
    name: "user",
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.user_id = "";
  if (req.session.user) {
    res.locals.user_id = req.session.user.user_id;
  }
  next();
});

const signinRouter = require("./routes/signin");
const signupRouter = require("./routes/signup");

app.use("/signin", signinRouter);
app.use("/signup", signupRouter);

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
app.get("/", function (request, response) {
  response.render("history");
});
app.get("/", function (request, response) {
  response.render("signin");
});

//페이지 이동
app.get("/news", function (req, res) {
  res.render("news.ejs");
});
app.get("/player", function (req, res) {
  res.render("player.ejs");
});
app.get("/history", function (req, res) {
  res.render("history.ejs");
});
app.get("/signin", function (req, res) {
  res.render("signin.ejs");
});
app.get("/signup", function (req, res) {
  res.render("signup.ejs");
});

// body-parser
app.use(express.urlencoded({ extended: false }));

// 라우터 연결
const listRouter = require("./routes/list");
const insertRouter = require("./routes/insert");
const deleteRouter = require("./routes/delete");
const updateRouter = require("./routes/update");

// 라우터 설정
app.use("/list", listRouter);
app.use("/insert", insertRouter);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);

// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
