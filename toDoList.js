const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createTask(){
    const taskTextValue = taskInput.value;
    const taskItem = document.createElement('li');
    taskItem.textContent =  taskTextValue;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}
function checkTask (event){
    const element = event.target;
    element.classList.toggle('completed');
}

addTaskButton.addEventListener("click", createTask);
taskList.addEventListener("click", checkTask)