var buttons = document.getElementsByClassName("modif")
var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")

function modified(str) {

    paragraph.innerhtml = " "
}



function garbage() {



}




// Explications de Benoit sur l'envoie de tâches dans le tableau

var boxes = document.getElementById("boxes")

var tasks = []

function onTaskSubmit() {
    var inputValue = document.getElementById("newTask").value
    var task = { value: inputValue, status: "to do" }

    tasks.push(task)


    boxes.innerHTML = ""

    tasks.forEach(function (task) {
        boxes.innerHTML += `
   
<div class="justify">
        <span class="status">${task.status}</span>
        ${task.value}
     <div>
        <div class="btn-group">
            <button type="button" onclick="modified()" class="btn text-white modif">Modifier</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">To Do</a></li>
                <li><a class="dropdown-item" href="#">Doing</a></li>
                <li><a class="dropdown-item" href="#">Done</a></li>
            </ul>
                
        </div>
        <button class="delete" onclick="garbage()"><img src="/img/delete.png" alt="poubelle supprimer"></button>
    </div>
        
</div>`

    })
    inputValue = ""
}

function garbage() {
    var deleteTask = document.getElementsByClassName("delete")
    var justi = document.getElementsByClassName("justify")

    justi.innerHTML = " "

    tasks.forEach(function (task) {

    })
}

function edit(index) {
    var doing = tasks[index].status = "doing"
    var toDo = tasks[index].status = "To do"
    var done = tasks[index].status = "Done"

    inputValue.forEach(function(index) {
        
    })



    onTaskSubmit()
}