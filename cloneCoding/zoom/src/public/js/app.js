const socket = io(); //자동적으로 Back-end socket.io와 연결해주는 function

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true; //room 이름 입력하기 전에는 숨겨둠

let roomName;

function addMessage(message){//message를 추가해주는 function
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
}

function handleMessageSubmit(event) { //Backend로 메세지 보냄
    event.preventDefault();
    const input = room.querySelector("#msg input");
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`You: ${value}`);
    });
    input.value = "";
}

function handleNicknameSubmit(event) { //Backend로 메세지 보냄
    event.preventDefault();
    const input = room.querySelector("#name input");
    socket.emit("nickname", input.value);
}

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;

    // welcome을 숨기고 room을 보여준 showRoom에서 form을 찾음
    const msgForm = room.querySelector("#msg");
    const nameForm = room.querySelector("#name");
    msgForm.addEventListener("submit", handleMessageSubmit);
    nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value; //참가자명 알려줌
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);


socket.on("welcome", (user) => {
    addMessage(`${user} Joined!`);
});

socket.on("bye", (left) => {
    addMessage(`${left} Left!`);
});

socket.on("new_message", addMessage); //다른 서버로부터 메세지 받음

socket.on("room_change", (rooms) => {
    const roomList = welcome.querySelector("ul");
    roomList.innerHTML = "";
    if(rooms.length === 0){ //내 어플리케이션에 room이 하나도 없으면 비움
        return;
    }
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.innerText = room;
        roomList.append(li);
    })
});