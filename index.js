
// getting elemnts from DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskComplet=document.getElementById('taskComplet');
const taskIncomplet=document.getElementById('taskIncomplz')


// add new task
function addTask() {
  if (taskInput.value !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: 'Use DummyJSON in the project',
        completed: false,
        userId: 1,
      })
    })
    .then(res => res.json())
    .then(console.log);
                
    
fetch('https://dummyjson.com/todos/random')
.then(res => res.json())
.then(console.log);

    taskItem.addEventListener('click', toggleComplete);

     // delete button to the task 
     const deleteButton=document.createElement("button");
   deleteButton.innerText="Delete";
deleteButton.classList.add("deleteButton");
deleteButton.addEventListener("click",deleteTask);
    taskItem.appendChild(deleteButton);
  
  }
}
// delete task
function deleteTask() {
  this.parentNode.remove();
}
fetch('https://dummyjson.com/todos/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);


// task completion
function toggleComplete() {
  this.classList.toggle('completed');
}

// add button
addButton.addEventListener('click', addTask);

