import http from "http";
//import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";
import { emit } from "process";

const app = express();

app.set('view engine', "pug"); //Pug로 view engine 설정
app.set("views", __dirname + "/views"); //Express에 template 경로 지정

//유저가 /public으로 가게 되면 __dirname + "/public" 폴더가 보이게 설정
//public url을 생성해 유저에게 파일 공유
app.use("/public", express.static(__dirname + "/public"));

//home으로 가면 request, response를 받고 res.render를 통해 만든 home을 render
//home.pug를 render해주는 route handler 생성
app.get("/", (_, res) => res.render("home"));

//유저가 어떤 url로 이동하던지 홈으로 돌려보냄(다른 url 사용하지 않을 것이므로)
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

//createServer를 하려면 requestListener 경로가 있어야 함 -> application
//express application으로부터 http 서버 만들기
const httpServer = http.createServer(app);

const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
    socket["nickname"] = "Anon";
    socket.onAny((event) => {
        console.log(`Socket Event: ${event}`);
    });
    socket.on("enter_room", (roomName, done) => {
        console.log(socket.id);
        console.log(socket.rooms);
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome", socket.nickname);
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) => 
            socket.to(room).emit("bye", socket.nickname));
    });
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
        done();
    });
    socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

// //새로운 WebSocket 서버 만들기
// const wss = new WebSocket.Server({ server });

// const sockets = []; //누군가 서버에 연결하면 connection을 추가

// wss.on("connection", (socket) => {
//     sockets.push(socket);
//     socket["nickname"] = "Anon";
//     console.log("Connected to Browser ✅"); 
//     socket.on("close", () => console.log("Disconnected from the Browser ❌"))
//     socket.on("message", (msg) => {
//         const message = JSON.parse(msg);
//         switch(message.type){
//             case "new_message":
//                 //각 브라우저를 aSocket으로 표시하고 메세지를 보내는 것
//                 sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));    
//             case "nickname":
//                 socket["nickname"] = message.payload;
//         }
//     });
// }); //event가 발동하는 것 기다림

httpServer.listen(3000, handleListen);
