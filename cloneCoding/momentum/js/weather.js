const API_KEY = 'Your API KEY';

function onGeoOk(position) {
    //사용자 위치 정보 제공
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name; //동 정보
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; //날씨 정보
    })); //JSON 내용 추출 및 데이터 추출
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 브라우저에서 위치 좌표 제공