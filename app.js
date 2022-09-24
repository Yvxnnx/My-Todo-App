const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const listLength = document.getElementById("list-length")
let list = []; // ["cola", "solo", "sprite"] []

function addToList() {
    if(todoInput.value == "") {
        alert("Field value cannot be empty.")
        return
    }
    list.push(todoInput.value);
    displayToDoList();
    todoInput.value = "";
}

function onKeyEnter(event) {
    if(event.code == "Enter") {
        addToList()
    }
}

function displayToDoList() {
    todoList.innerHTML = ""; 
    listLength.innerText = list.length
    for(const index in list) {
        todoList.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between">
        ${list[index]}
        <button class="btn-close" id="${index}" onclick=removeTodo(this.id)></button>
        </li>`
    }
}

function removeTodo(index) {
    list.splice(index, 1);
    displayToDoList();
}

function clearAll() {
    list = [];
    displayToDoList()
}