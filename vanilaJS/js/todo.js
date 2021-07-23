const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list');

function handelToDoSubmit (event) {
  event.preventDefault();
  console.log(toDoInput.value)

}

toDoForm.addEventListener('submit', handelToDoSubmit)