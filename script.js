let addTaskButton = document.getElementById("add-task-button");
let newTaskInput = document.getElementById("input-text");
let newTaskText = ""
let outstandingTaskList = document.getElementById("outstanding-task-list");
let inProcessTaskList = document.getElementById("in-process-task-list");



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
