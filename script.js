const addTaskButton = document.getElementById("add-task-button");
const newTaskInput = document.getElementById("input-text");
let newTaskText = ""
const outstandingTaskList = document.getElementById("outstanding-task-list");
const inProcessTaskList = document.getElementById("in-process-task-list");
const completedTaskList = document.getElementById("completed-task-list");

// save plan to local storage
const PLAN_STORAGE_KEY = "todo.v1"

const saveTodoToLocalStorage = (todoData) => {
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(todoData));
};

const loadTodoFromLocalStorage = () => {
    const raw = localStorage.getItem(PLAN_STORAGE_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
};

//save state helper function
const saveCurrentState = () => {
    saveTodoToLocalStorage ({
        outstanding: Array.from(outstandingTaskList.querySelectorAll("li")).map(li => li.textContent),
        inProcess: Array.from(inProcessTaskList.querySelectorAll("li")).map(li => li.textContent),
        completed: Array.from(completedTaskList.querySelectorAll("li")).map(li => li.textContent)
    })
}

//add new tasks
addTaskButton.addEventListener("click", () => {
    newTaskText = newTaskInput.value;
    if (!newTaskText.trim()) return;
    let newLi = document.createElement("li");
    newLi.textContent = newTaskText;
    outstandingTaskList.appendChild(newLi);
    newTaskInput.value ="";
    saveCurrentState();
});


//move tasks to in progress
outstandingTaskList.addEventListener("click", (e) => {
    let listItem = e.target;
    if(e.target.tagName === "LI"){
        inProcessTaskList.appendChild(listItem)
    }
    saveCurrentState();
});

//move tasks to completed
inProcessTaskList.addEventListener("click", (e) => {
    let listItem = e.target;
    if(e.target.tagName === "LI"){
        completedTaskList.appendChild(listItem)
    }
   saveCurrentState();
});

//restore todo from local storage
const savedTodo = loadTodoFromLocalStorage();
if (savedTodo) {
    savedTodo.outstanding.forEach(taskText =>{
        const newLi = document.createElement("li");
        newLi.textContent = taskText;
        outstandingTaskList.appendChild(newLi)
    });
    savedTodo.inProcess.forEach(taskText =>{
        const newLi = document.createElement("li");
        newLi.textContent = taskText;
        inProcessTaskList.appendChild(newLi)
    });
    savedTodo.completed.forEach(taskText =>{
        const newLi = document.createElement("li");
        newLi.textContent = taskText;
        completedTaskList.appendChild(newLi)
    });
    

}


