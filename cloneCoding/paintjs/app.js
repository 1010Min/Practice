//canvas 위에 마우스를 두면 감지하는 것
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

//canvas를 pixel을 다룰 수 있는 element(pixel modifier)로서 
//만드는 것이므로 사이즈 지정이 필요
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//배경 이미지가 없으면 투명으로 저장되므로 미리 canvas 색 설정
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR; //context 색상
ctx.lineWidth = 2.5; //context 두께
ctx.fillStyle = INITIAL_COLOR; //캔버스를 채울 색상

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) { //마우스를 움직이는 동안 계속 발생하는 것
    /*
    offsetX, Y: 캔버스 범위 내의 마우스 위치값
    clientX, Y: 윈도우 전체의 범위 내의 마우스 위치값
    */
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath(); //클릭하지 않고 마우스를 움직였을 때 -> 
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    //console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; //색상 변경
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const stroke = event.target.value;
    ctx.lineWidth = stroke
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "PAINT";
    }
}

function handleCanvasClick() {
    if(filling){
        //fillReact(시작 X좌표, 시작 Y좌표, width, height)
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault(); //오른쪽 버튼 누르면 사진 저장 가능한 것 막기
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]"; //download는 anchor("a") 태그의 attribute
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //마우스를 클릭했을 때 발생하는 이벤트
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

/* 
Canvas API 홈페이지: https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
*/