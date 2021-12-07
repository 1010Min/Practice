import express from "express";

const app = express();

app.set('view engine', "pug"); //Pug로 view engine 설정
app.set("views", __dirname + "/views"); //Express에 template 경로 지정

//유저가 /public으로 가게 되면 __dirname + "/public" 폴더가 보이게 설정
//public url을 생성해 유저에게 파일 공유
app.use("/public", express.static(__dirname + "/public"));

//home으로 가면 request, response를 받고 res.render를 통해 만든 home을 render
//home.pug를 render해주는 route handler 생성
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

app.listen(3000, handleListen);