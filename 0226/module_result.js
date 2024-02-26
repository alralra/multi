var modul = require("./plus_a.js");
var modul1 = require("./plus_b.js");
console.log(modul.a() + modul1.b());
console.log(modul.c() * modul1.d());

if (modul.e() > modul1.f()) {
  console.log("큰 수는 " + modul.e() + "입니다");
} else {
  console.log("아님");
}
var g = [15.1, 15.4, 16.1, 17.5, 19.2];
modul.g1(g);
console.log("평균 온도는 : ", sum / g.length);



modul.getRandom();
