const randomWordFr = require("random-word-fr")


var buttons = document.getElementsByClassName("modif")
var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")


// Explications de Benoit sur l'envoie de tâches dans le tableau



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
            <button type="button" onclick="random()" class="random btn">Random</button>
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
}

function random() {
    var mysteryWord = randomWordFr
    tasks.forEach(function () {
        
    })
}