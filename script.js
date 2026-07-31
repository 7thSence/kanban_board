document.addEventListener("DOMContentLoaded" , () => {

const taskContent = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-btn")


let tasks = json.parse(localStorage.getItem("tasks")) || []
addTaskBtn.addEventListener("click" , () => {
    let text = taskContent.value.trim()
    let task = {
        id : Date.now(),
        name : text,
        completed : true
    }
    tasks.push(task)
    console.log(tasks)
    text = ""
    storeItem()


})

function


function storeItem() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}




})