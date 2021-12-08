import http from "http";
import WebSocket from "ws";
import express from "express";

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
const server = http.createServer(app);

//새로운 WebSocket 서버 만들기
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
    console.log("Connected to Browser ✅"); 
    socket.on("close", () => console.log("Disconnected from the Browser ❌"))
    socket.on("message", (message) => {
        console.log(message.toString('utf8'));
    })
    socket.send("hello"); //서버에 있는 것이 아닌 socket에 있는 메서드
}); //event가 발동하는 것 기다림

server.listen(3000, handleListen);