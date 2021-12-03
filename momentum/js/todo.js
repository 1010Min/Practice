const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; //toDos 내용이 변경될 수 있으므로 const 대신 let
const TODOS_KEY = "todos";

function saveToDos() {
    // toDos array 내용을 localStorage에 넣는 것
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; //지우고 싶은 li
    li.remove(); //선택한 li 제거
}

function paintToDo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "🗑";
    button.addEventListener("click", deleteToDo)

    li.appendChild(span); //li 태그 안에 span 태그가 존재하는 것
    li.appendChild(button);
    toDoList.appendChild(li); //toDoList 안에 li 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value = ""; //엔터 누르면 입력값 사라짐
    toDos.push(newTodo); //array에 입력값 넣기
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


