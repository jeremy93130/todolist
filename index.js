const randomWordFr = require("random-word-fr")


var buttons = document.getElementsByClassName("modif")
var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")
var deleteTask = document.getElementsByClassName("delete")



// Explications de Benoit sur l'envoie de tâches dans le tableau

var tasks = []

function onTaskSubmit() {
    var inputValue = document.getElementById("newTask").value
    var task = { value: inputValue, status: "to do" }

    tasks.push(task)


displayBoxes()

    inputValue = ""
}

  
function displayBoxes() {
    boxes.innerHTML = ""

    tasks.forEach(function (task, index) {
        boxes.innerHTML += `
   
<div class="justify">
        <span class="status">${task.status}</span>
        ${task.value}
    <div>
        <div class="btn-group">
            <button type="button" onclick="random(${index})" class="random btn">Random</button>
            <button type="button" onclick="modified(${index})" class="btn text-white modif">Modifier</button>
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
        <button class="delete" onclick="remove(${index})"><img src="/img/delete.png" alt="poubelle supprimer"></button>
    </div>
        
</div>`

    })
}
  
// Fonction pour supprimer une tâche
function remove(index) {
    tasks.splice(index, 1)
    displayBoxes()
}

// Fonction pour modifier une tâche



// Fonction bouton random : 


