// Seletors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOpt = document.querySelector(".filter-todo");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOpt.addEventListener("click", filterTodo);

// FUnctions
// Restructure to Component Based
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Create Todo HTML Structure
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoContainer.appendChild(newTodo);

    // Check Mark Button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoContainer.appendChild(completedBtn);

    // Trash Button
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoContainer.appendChild(trashBtn);

    // Append to List
    todoList.appendChild(todoContainer);

    // Clear Todo Input Value
    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Add animation
        todo.classList.add("fall");
        // transition end event waits for transition to finish
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // Check Mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (e.target.value === "all") {
            todo.style.display = "flex";
        } else if (e.target.value === "completed") {
            if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none"
            }
        } else if (e.target.value === "uncompleted") {
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none"
            }
        }
    });
}