//모듈 추출
const express = require("express");
const mysql = require("mysql");
// 서버 생성
const router = express.Router();
// 데이터베이스 연결
connection.connect();
// 데이터베이스 쿼리 사용
connection.query(
  "INSERT INTO Book(bookid, bookname, publisher, price) VALUES(?,?,?,?)",
  [111, "Node.js 교과서", "길벗", 42000],
  function (error, result, fields) {
    if (error) {
      console.log("쿼리 문장에 오류가 있습니다.");
      console.log(error);
    } else {
      console.log("입력이 완료되었습니다.");
    }
  }
);
// 서버 실행
app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
