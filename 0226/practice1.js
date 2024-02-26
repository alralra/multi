// 시간 측정 시작
console.time('alpha');
let output = 0;
for(let i=1; i<=1000; i++){
output += i;
}
console.log('Result : ', output);
// 시간 측정 종료
console.timeEnd('alpha');


console.log('argv의 속성의 피라미터 수 :','4')
process.argv.forEach(function(item, index) {
    // 출력
    console.log(`${index} : ${item}`);
    // 실행 매개변수에 --exit가 있을 때
    if(item == '--exit')
    {
    // 다음 실행 매개변수를 얻는다.
    let exitTime = Number(process.argv[index+1]);
    // 일정 시간 후 프로그램을 종료한다.
    setTimeout(function(){
    process.exit();
    }, exitTime);
    }
    });