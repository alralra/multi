var array = [10, 20, 30, 40, 50];

//function

var map1 = array.map(function (item) {
  return item * 2;
});
console.log(map1);

//화살표 함수
var map2 = array.map((item) => item * 2);
console.log(map2);

var map1 = array.map(function (item, index) {
  return item * index;
});
console.log(map1);

//화살표 함수
var map2 = array.map((item, index) => item * index);
console.log(map2);
