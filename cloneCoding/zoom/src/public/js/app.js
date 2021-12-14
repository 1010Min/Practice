const socket = io(); //자동적으로 Back-end socket.io와 연결해주는 function

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true; //room 이름 입력하기 전에는 숨겨둠

let roomName;

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value; //참가자명 알려줌
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);