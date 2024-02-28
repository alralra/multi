// 모듈 추출
const http = require("http");
// server 객체 생성
const server = http.createServer();
// 포트 설정
const port = 3000;
server.on("request", function (req, res) {
console.log("Request On");
res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
res.write("<!DOCTYPE html>");
res.write("<html>");
res.write("<head>");
res.write("<title>응답 페이지</title>");
res.write("</head>");
res.write("<body>");
res.write("<h1>Node.js로부터의 응답 페이지</h1>");
res.write("</body>");
res.write("</html>");
res.end();
});
server.listen(port, function () {
    console.log("웹 서버가 시작되었습니다. : %d", port);
    });