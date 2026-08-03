document.addEventListener("DOMContentLoaded" , () => {

const taskContent = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-btn")
const todoContainer = document.getElementById("todo-container")


let tasks = JSON.parse(localStorage.getItem("tasks")) || [ ]
tasks.forEach(x => {
    renderItem(x)
});

addTaskBtn.addEventListener("click" , () => {
    let text = taskContent.value.trim()
    let task = {
        id : Date.now(),
        name : text,
        completed : false
    }
    tasks.push(task)
   // console.log(tasks)
    
    storeItem()
    renderItem(task)
    text.value = ""
})

function renderItem(mytask) { 
    const li = document.createElement("li")
    li.setAttribute  ("data-id", mytask.id)

    li.innerHTML = `<span class = "task" >${mytask.name} </span> 
    <button class ="task-buttons">start </button> <button class = "delete-buttons">Delete</button>`;

    todoContainer.appendChild(li)

    

 

}


function storeItem() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}




})