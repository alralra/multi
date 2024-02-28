
    process.on("uncaughtException", function (error) {
        console.log("예외가 발생했군^^ 이번에만 봐주겠다!");
        // 이벤트 제거
        process.removeListener('uncaughtException', onUncaughtException);
        });
        // 2초 간격으로 예외를 발생시킨다.
        function test() {
        setTimeout(test, 2000);
        error.error.error();
        }
        setTimeout(test, 2000);
        