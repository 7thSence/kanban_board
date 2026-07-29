document.addEventListener("DOMContentLoaded" , () => {

const taskContent = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-btn")


let tasks = []
addTaskBtn.addEventListener("click" , () => {
    let text = taskContent.value.trim()
    tasks.push(text)
    console.log(tasks)
    text = ""

})







})