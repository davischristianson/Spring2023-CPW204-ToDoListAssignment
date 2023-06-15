var picker = datepicker("#due-date");
picker.setMin(new Date());
var ToDoTask = (function () {
    function ToDoTask() {
    }
    return ToDoTask;
}());
window.onload = function () {
    var addTask = document.getElementById("add-task");
    addTask.onclick = main;
};
function main() {
    if (isValid) {
        var task = getToDoTask();
        displayToDoTask(task);
    }
}
function isValid() {
    return true;
}
function getToDoTask() {
    var myTask = new ToDoTask();
    var taskInput = document.getElementById("task-name");
    myTask.taskName = taskInput.value;
    var dueDateInput = document.getElementById("due-date");
    myTask.dueDate = new Date(dueDateInput.value);
    var taskFinished = document.getElementById("is-completed");
    myTask.taskCompleted = taskFinished.checked;
    return myTask;
}
function displayToDoTask(task) {
    var taskText = document.createElement("h3");
    taskText.innerText = task.taskName;
    var taskDate = document.createElement("p");
    taskDate.innerText = task.dueDate.toDateString();
    var taskDiv = document.createElement("div");
    taskDiv.onclick = markAsComplete;
    taskDiv.classList.add("todo");
    if (task.taskCompleted) {
        taskDiv.classList.add("completed");
    }
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDate);
    if (task.taskCompleted) {
        var completedToDos = document.getElementById("completed-tasks");
        completedToDos.appendChild(taskDiv);
    }
    else {
        var incompleteToDos = document.getElementById("incomplete-tasks");
        incompleteToDos.appendChild(taskDiv);
    }
}
function markAsComplete() {
    var taskDiv = this;
    taskDiv.classList.add("completed");
    var completedTasks = document.getElementById("completed-tasks");
    completedTasks.appendChild(taskDiv);
}
