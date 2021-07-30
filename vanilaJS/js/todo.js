const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  
}

function deleteToDo (event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  li.remove();
}

function paintToDo (newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span')
  span.innerText = newToDo.text;
  const button = document.createElement('span');
  button.innerText = '❌';
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)
}

function sayHello(event) {
  console.log("this is turn of ", event)
}

function handelToDoSubmit (event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handelToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

[1, 2, 3, 4].filter(sexyFilter)