// 모듈 추출 및 서버 생성
const express = require("express");
const app = express();
// 라우터 연결
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
// 라우터 설정
app.use("/", indexRouter);
app.use("/user", userRouter);
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
