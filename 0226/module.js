// 절대값을 구하는 메서드
function abs(number) {
  if (0 < number) {
    return number;
  } else {
    return;

    -number;
  }
}
// 원의 넓이를 구하는 메서드
function circleArea(radius) {
  return radius * radius * Math.PI;
}
module.exports = { abs, circleArea };
