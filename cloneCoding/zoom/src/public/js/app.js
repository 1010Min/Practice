//frontend와 backend 연결
const socket = new WebSocket(`ws://${window.location.host}`);

//socket에 open 이벤트 추가
socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
})

//socket에 message 이벤트 추가
socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data, " from the Server.")
})

//socket에 close 이벤트 추가
socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
})

//10초 뒤에메세지 보내기
setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);