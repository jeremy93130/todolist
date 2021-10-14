var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")


// Explications de Benoit sur l'envoie de tâches dans le tableau

var tasks = []

function onTaskSubmit() {
    var inputValue = document.getElementById("newTask").value
    var task = { value: inputValue, status: "to do" }

    tasks.push(task)


    displayBoxes()

    inputValue = ""
}


function displayBoxes(index, task) {
    boxes.innerHTML = ""

    tasks.forEach(function (task, index) {
        boxes.innerHTML += `
   
<div id="task[${index}]" class="justify">
        <span class="status todo" id="status[${index}]">${task.status}</span>
        <span id="edit-${index}"class="value">${task.value}</span>
    <div class="sideToSide">
        <div class="btn-group">
            <button type="button"  class="btn text-white" onclick="addForm(${index})">Modifier</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onclick="selectStatus(${index}, this, 'todo')">To Do</a></li>
                <li><a class="dropdown-item" href="#" onclick="selectStatus(${index}, this, 'doing')">Doing</a></li>
                <li><a class="dropdown-item" href="#" onclick="selectStatus(${index}, this, 'done')">Done</a></li>
            </ul>
                
        </div>
        <button class="delete" onclick="remove(${index})"><img src="/img/delete.png" alt="poubelle supprimer"></button>
    </div>
        
</div>`

    })
}

// Fonction qui permet de changer le status de To Do , Doing ou Done:

function selectStatus(index, element, className) {

    // Tâche dont on modifie le statut :

    var task = tasks[index]

    task.status = element.innerText

    var span = document.getElementById(`status[${index}]`)
    span.innerHTML = task.status

    span.className = 'status' + className
    selectStatus()

}

// Fonction pour supprimer une tâche
function remove(index) {
    tasks.splice(index, 1)
    displayBoxes()
}

//Cette fonction permet d'afficher le formulaire de modification

function addForm(index) {
    // on récupere l'element où on va rajouter notre formulaire
    var edited = document.getElementById(`edit-${index}`)
    console.log(edited)

    // Ajout du formulaire à l'element 
    edited.innerHTML = `
        <form onsubmit="edit(${index}); return false;" >
            <input type="text" id="taskEdited" class="sendList" placeholder="">
            <button id="edit-btn" type="submit">Valider</button>
        </form>
    `

}

// Cette fonction est appellée dans le formulaire pour modifier l'Objet 

function edit(index) {
    // on récupere la valeur de l'input 
    var edited = document.getElementById("taskEdited").value

    // On change la valeur de l'Objet qui est dans le tableau task avec la nouvelle valeur (ligne au dessus)
    tasks[index].value = edited

    // On récupere l'élément où l'on veut réafficher
    var elementHTML = document.getElementById(`edit-${index}`)

    // Je supprime tout ce qui était dedans et initialise une nouvelle string vide 
    elementHTML.innerHTML = "";

    // A la place de string vide je mets la nouvelle valeur ( la value de l'Objet modifié )
    elementHTML.innerHTML = tasks[index].value;
}

// Fonction bouton random : 

function randomButton(random) {
    var randomWords = ["Promener Kiwi", "Laver Mamie", "Renverser papy", "Reveiller son cerveau", "Recharger son téléphone", "Demander des grossièretées en italiens à Salwa", "Organiser un combat de Sumo", "Visiter Fleury-Mérogis", "Faire chier Benoît toutes les 5 minutes"]
    var maths = Math.floor(Math.random() * (randomWords.length));

    var task = { value: randomWords[maths], status: "To Do" }

    tasks.push(task)

    displayBoxes()
}

// Cette fonction permet d'afficher le formulaire 

function addForm(index) {
    // on récupere l'element où on va rajouter notre formulaire
    var edited = document.getElementById(`edit-${index}`)
    console.log(edited)

    // Ajout du formulaire à l'element 
    edited.innerHTML = `
        <form onsubmit="edit(${index}); return false;" >
            <input type="text" id="taskEdited" class="sendList" placeholder="">
            <button id="edit-btn" type="submit">Valider</button>
        </form>
    `

}

// Cette fonction est appellée dans le formulaire pour modifier l'Objet 

function edit(index) {
    // on récupere la valeur de l'input 
    var edited = document.getElementById("taskEdited").value

    // On change la valeur de l'Objet qui est dans le tableau task avec la nouvelle valeur (ligne au dessus)
    tasks[index].value = edited

    // On récupere l'élément où l'on veut réafficher
    var elementHTML = document.getElementById(`edit-${index}`)

    // Je supprime tout ce qui était dedans et initialise une nouvelle string vide 
    elementHTML.innerHTML = "";

    // A la place de string vide je mets la nouvelle valeur ( la value de l'Objet modifié )
    elementHTML.innerHTML = tasks[index].value;
}