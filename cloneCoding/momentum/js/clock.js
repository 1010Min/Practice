const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침하면 1초 뒤에 실행되므로 미리 한번 실행
setInterval(getClock, 1000); //1초에 한번씩 실행되도록