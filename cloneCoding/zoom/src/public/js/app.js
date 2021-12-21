const socket = io();

// Phone Call Form 

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const camerasSelect = document.getElementById("cameras");

const call = document.getElementById("call");

call.hidden = true;

let myStream;
let muted = false; //음소거 여부를 추적할 variable
let cameraOff = false; //카메라가 켜져or꺼져 있는지 추적할 variable
let roomName;
let myPeerConnection;

async function getCameras() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter((device) => device.kind === "videoinput");
        const currentCamera = myStream.getVideoTracks()[0];
        cameras.forEach((camera) => {
            const option = document.createElement("option");
            option.value = camera.deviceId;
            option.innerText = camera.label;

            if(currentCamera.label == camera.label){
                option.selected = true;
            }

            camerasSelect.appendChild(option);
        });
    } catch(e) {
        console.log(e);
    }
}

async function getMedia(deviceId) {
    const initialConstraints = {
        audio: true, 
        video: { facingMode: "user" }, 
    }; //deviceId가 없이 getMedia를 호출했을 때의 constraints

    const cameraConstraints = {
        audio: true,
        video: { deviceId: { exact: deviceId } },
    };

    try {
        myStream = await navigator.mediaDevices.getUserMedia(
            deviceId ? cameraConstraints : initialConstraints
        );
        myFace.srcObject = myStream;

        //만약 deviceID가 없다면 카메라를 가져옴
        if(!deviceId) {
            await getCameras();
        }
    } catch(e) {
        console.log(e);
    }
}

function handleMuteClick() {
    myStream.getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));

    if(!muted) {
        muteBtn.innerText = "Unmute";
        muted = true;
    } else {
        muteBtn.innerText = "Mute";
        muted = false;
    }
}

function handleCameraClick() {
    myStream.getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));

    if(cameraOff) {
        cameraBtn.innerText = "Turn Camera Off";
        cameraOff = false;
    } else {
        cameraBtn.innerText = "Turn Camera On";
        cameraOff = true;
    }
}

async function handleCameraChange() {
    await getMedia(camerasSelect.value);
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
camerasSelect.addEventListener("input", handleCameraChange);

// Welcome Form (join a room)

const welcome = document.getElementById("welcome");
const welcomeForm = welcome.querySelector("form");

async function startMedia() {
    welcome.hidden = true;
    call.hidden = false;
    await getMedia();
    makeConnection();
}

function handleWelcomeSubmit(event) {
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    socket.emit("join_room", input.value, startMedia);
    roomName = input.value;
    input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

// Socket Code

//// Peer A에서 실행되는 코드
socket.on("welcome", async () => {
    const offer = await myPeerConnection.createOffer();
    myPeerConnection.setLocalDescription(offer);
    //console.log(offer); //세션에서 일어날 일에 대한 설명
    console.log("sent the offer");
    socket.emit("offer", offer, roomName); //Peer B로 offer를 보냄
})

//// Peer B에서 실행되는 코드
socket.on("offer", (offer) => {
    console.log(offer);
});

// RTC Code

function makeConnection() {
    myPeerConnection = new RTCPeerConnection(); //해당 연결을 모든 곳에 공유하고 싶을 때
    //console.log(myStream.getTracks());
    myStream.getTracks().forEach((track) => {
        myPeerConnection.addTrack(track, myStream);
    });
}