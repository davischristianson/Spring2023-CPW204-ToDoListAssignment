// @ts-ignore: Ignoring issue with js-datepicker, lack of intellisense
const picker = datepicker("#due-date");
picker.setMin(new Date()); // Set to todays date

class ToDoTask {
    taskName:string;
    dueDate:Date;
    taskCompleted:boolean;
}

window.onload = function() {
    let addTask = document.getElementById("add-task");
    addTask.onclick = main;
}

function main():void {
    if(isValid) {
        let task = getToDoTask();
        displayToDoTask(task);
    }
}

function isValid():boolean {
    return true;
}

function getToDoTask():ToDoTask {
    let myTask = new ToDoTask();

    // Get task name
    let taskInput = <HTMLInputElement>document.getElementById("task-name");
    myTask.taskName = taskInput.value;

    // Get due date of task
    let dueDateInput = <HTMLInputElement>document.getElementById("due-date");
    myTask.dueDate = new Date(dueDateInput.value);

    // Get bool value of whether task is completed already
    let taskFinished = <HTMLInputElement>document.getElementById("is-completed");
    myTask.taskCompleted = taskFinished.checked;

    return myTask;
}

function displayToDoTask(task:ToDoTask):void {

    let taskText = document.createElement("h3");
    taskText.innerText = task.taskName;

    let taskDate = document.createElement("p");
    taskDate.innerText = task.dueDate.toDateString();

    let taskDiv = document.createElement("div");

    taskDiv.onclick = markAsComplete;
    
    taskDiv.classList.add("todo");
    if(task.taskCompleted) {
        taskDiv.classList.add("completed");
    }


    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDate);

    if(task.taskCompleted) {
        let completedToDos = document.getElementById("completed-tasks");
        completedToDos.appendChild(taskDiv);
    }
    else {
        let incompleteToDos = document.getElementById("incomplete-tasks");
        incompleteToDos.appendChild(taskDiv);
    }
}

function markAsComplete() {
    let taskDiv = <HTMLDivElement>this;
    taskDiv.classList.add("completed");

    let completedTasks = document.getElementById("completed-tasks");
    completedTasks.appendChild(taskDiv);
}