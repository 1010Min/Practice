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

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 toDo는 남기기
    //li.id는 string type이므로 integer type인 toDo.id와 비교하기 위해 parseInt 사용
    saveToDos(); //지운 것 저장하기 위해서 한번 더 호출
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //각 li마다 id 부여

    const span = document.createElement("span");
    span.innerText = newTodo.text; //text에서 Object로 바뀌었으므로

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

    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //id로 각각의 li item을 구분하기 위함
    }

    toDos.push(newTodoObj); //array에 object 넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //이전에 저장된 toDo 저장
    parsedToDos.forEach(paintToDo);
}