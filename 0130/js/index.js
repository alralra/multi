// API KEY
const API_KEY = "본인의 API KEY";
// 장치의 현재 위치 추출
navigator.geolocation.getCurrentPosition((position) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?
    lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // URL 처리
  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => {
        const weatherImg = document.querySelector("#weather .wImg");
        const weather = document.querySelector("#weather .temp");
        const info = document.querySelector("#weather .info");
        const city = document.querySelector("#weather .city");
        // HTML 태그에 데이터 넣기
        weatherImg.src = "이미지";
        weather.innerHTML = `${Math.ceil(data.main.temp)}°C`;
        info.innerHTML = `${data.weather[0].main}`;
        city.innerHTML = data.name;
      },
      () => {
        console.log("위치를 찾을 수 없습니다.");
      }
    );
});
// API 호출 경로
