// //모듈 추출
// const express = require("express");
// const fs = require("fs");
// //서버 생성
// const app = express();
// app.use(function (request, response) {
//   fs.readFile("index.html", "utf-8", function (error, data) {
//     // 응답 방법 1.
//     response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     response.end(data);
//   });
// });
// // 서버 실행
// app.listen(3000, function () {
//   console.log("Server Running at http://127.0.0.1:3000");
// });

//모듈 추출
const express = require('express');
//서버 생성
const app = express();
app.use(function(request, response){
// 데이터 생성
const output = [];
for(let i=0; i<3; i++){
output.push({ count : i,

name : 'name - ' + i

});
}
// 응답
response.send(output);
});
// 서버 실행
app.listen(3000, function(){
console.log("Server Running at http://127.0.0.1:3000");
});