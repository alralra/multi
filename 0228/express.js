// 모듈 추출
const express = require("express");
// 서버 생성
const app = express();
// 포트 설정
app.set("port", process.env.PORT || 3000);
// express 서버 실행
app.listen(app.get("port"), function () {
  console.log("Express 서버가 실행중입니다 : " + app.get("port"));
});






































