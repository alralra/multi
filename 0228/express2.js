// // 모듈 추출 및 서버 생성
// const express = require('express');
// const app = express();
// // 미들웨어 사용
// app.use(function(request, response, next) {
// console.log('미들웨어에서 요청을 처리함.');
// response.send("<h1>Express 서버에서 응답한 결과입니다.</h1>");
// });
// app.listen(3000, function(){
// console.log("Server Running at http://127.0.0.1:3000");
// });


// 모듈 추출 및 서버 생성
const express = require('express');
const app = express();
//미들웨어 설정
app.use(function(request, response, next){
// 데이터 추가
request.number = 2023;
response.number = 2024;
next();
});
app.use(function(request, response, next){
// 응답
response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});
// 서버 실행
app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});