const { legacyBabel7SyntaxPlugins } = require("@babel/preset-env/lib/available-plugins");
const { buildToDo } = require("../src");

/*document.addEventListener("submit", (event) => {
if (event.target && (event.target.id === "task-form" || event.target.tagName === Form)) {
  event.preventDefault();
  
    const taskInput = document.getElementById("new-task-description") ||
                      event.target.elements["new-task-description"] ||
                    event.target.querySelector("input[type = ['text']");

    if (taskInput) {
    const taskDescription = taskInput.value;
  
    buildToDo(taskDescription);
    }
    event.target.reset();
  }
  });

  //add items to list
export function buildToDo(task) {
    const li = document.createElement("li");
      
    if (typeof task === "object" && task !== null){
      li.textContent = task.description || task.text || "";
    } else {
      li.textContent = task || "";
    }

    const listContainer = document.getElementById("tasks");
    
  if (listContainer) {
    listContainer.appendChild(li);
   }
  }

if (typeof document !== 'undefined') {
   document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("submit", (event) => {
       if (event.target && (event.target.id === "task-form" || event.target.tagName === "FORM")) {
            event.preventDefault();


     if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();*
    const taskInput = document.getElementById("new-task-description");

            if (taskInput) {
                const taskDescription = taskInput.value;
                buildToDo(taskDescription);
            }
            if (event.target && typeof event.target.reset === "function"){
                event.target.reset();
        }
    });
}

 if (typeof module !== 'undefined' && mobule.exports) {
    module,exports = {buildToDo};
 }
const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const todoList = document.querySelector('ul');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.ariaValueMax.trim();

    if (taskText !== "") {
        const newTodo = document.createElement(li);
    
        newTodo.textContent = taskText;

        todoList.appendChild(newTodo);
        form.reset();
}
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        formSubmissionHandler};
    }

document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("#create-task-form");

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const input = document.querySelector("new-task-description");
        const taskText = input.value.trim();

        if (taskText !=="") {
            const taskList = document.querySelector("#tasks");
            const li = document = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
        
        form.reset();
        }
    });
});

/*function buildToDo(todo) {
    const taskList = document.querySelector("#tasks");
    const li = document.createElement(li);
    li.textContent = todo;
    taskList.appendChild(li);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {buildToDo};
}*/