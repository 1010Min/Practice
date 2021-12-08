const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
//frontend와 backend 연결
const socket = new WebSocket(`ws://${window.location.host}`);

//socket에 open 이벤트 추가
socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
})

//socket에 message 이벤트 추가
socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);//li를 messageList 안에 넣어줌
})

//socket에 close 이벤트 추가
socket.addEventListener("close", () => {
    console.log("Disconnected from Server ❌");
})

function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    const li = document.createElement("li");
    li.innerText = `You: ${input.value}`;
    messageList.append(li);
    input.value="";
}

function handleNickSubmit(event) {
    event.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    input.value="";
}

messageForm.addEventListener("submit", handleSubmit);
nickForm.addEventListener("submit", handleNickSubmit);
