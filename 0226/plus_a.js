function a() {
  a = 10;
  return a;
}
function c() {
  c = 12;
  return c;
}
function e() {
  e = 100;
  return e;
}
function g1(a) {
  sum = 0;
  for (var j = 0; j < a.length; j++) {
    sum += a[j];
  }

  return sum;
}

var getRandom = () =>{
  let array=[]
  var bigger = 0;

  for(let i=0; i<10; i++){
    let random = Math.floor(Math.random()*100+1);
    array.push(random);

    bigger = bigger >= array[i] ? bigger : array[i];
    console.log(array[i]);
  }
  console.log("가장 큰 수는 %d 입니다", bigger)
}
module.exports = { a, c, e, g1, getRandom };
