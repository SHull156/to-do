const addTaskButton = document.getElementById("add-task-button");
const newTaskInput = document.getElementById("input-text");
let newTaskText = ""
const outstandingTaskList = document.getElementById("outstanding-task-list");
const inProcessTaskList = document.getElementById("in-process-task-list");
const completedTaskList = document.getElementById("completed-task-list");


addTaskButton.addEventListener("click", () => {
    newTaskText = newTaskInput.value;
    if (!newTaskText.trim()) return;
    let newLi = document.createElement("li");
    newLi.textContent = newTaskText;
    outstandingTaskList.appendChild(newLi);
    newTaskInput.value ="";
});

outstandingTaskList.addEventListener("click", (e) => {
    let listItem = e.target;
    if(e.target.tagName === "LI"){
        inProcessTaskList.appendChild(listItem)
    }

})

inProcessTaskList.addEventListener("click", (e) => {
    let listItem = e.target;
    if(e.target.tagName === "LI"){
        completedTaskList.appendChild(listItem)
    }

})


