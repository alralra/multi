require('http').createServer(function(request, response){
    // 응답한다.
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end("<h1>Hello World..!</h1>");
    }).listen(3000, function(){
    console.log('Server Running at http://127.0.0.1:3000');
    });