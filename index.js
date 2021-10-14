var del = document.getElementsByClassName("delete")
/**
 * Element conteneur de toutes les tâches 
 * @global
 * @var {HTMLElement}
 */
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")
// var deleteTask = document.getElementsByClassName("delete")


// Explications de Benoit sur l'envoi de tâches dans le tableau

var tasks = []

/**
 * Ajoute la tâche lorsqu'on appuie sur entrée.
 */
function onTaskSubmit() {
    var inputValue = document.getElementById("newTask")
    /* on récupère la valeur de notre champ de saisie*/
    var task = { value: (inputValue.value + ""), status: "To Do" }
    addTask(task, tasks.length)
    tasks.push(task)
    inputValue.value = ""
}

// Definit le nouveau status de la tâche sélectionnée

function selectStatus(index, element, className) {
    /**
     * Tâche dont on modifie le statut
     * @var {Object}
     */

    var task = tasks[index]

    /* On met à jour le statut de la tâche en récupérant le texte contenu dans l'élément HTML sur lequel j'ai cliqué. */

    task.status = element.innerText

    /**
     * L'élement HTML correspondant au statut que je veux modifier (l'index)
     * @var {HTMLElement}
     */

    var span = document.getElementById(`status[${index}]`) // Va chercher dans le dom l'élément de l'id 
    span.innerHTML = task.status

    /*Changement de l'attribut class de l'élément span (changement couleur todo , doing , done) */

    span.className = "status " + className
    selectStatus()

}

// Ajout d'une nouvelle tâche

function addTask(task, index) {
    /*Ajout du code HTML de la tâche en fin de conteneur contrairement à .innerHTML qui remplace tout le code html*/
    /* onclick="selectstatus(index,this,todo) = Le onclick appelle la fonction SelectStatus , this correspond au dropdown qui porte son nom (dropDown Todo = statut de la tâche Todo) 
                                                'todo','doing','done' Correspondent au paramètre Classname (le nom de la classe)*/
    boxes.insertAdjacentHTML("beforeend",

        ` <div id="task[${index}]" class="justify">
        <span class="status todo" id="status[${index}]">${task.status}</span> 
        <span id="edit-${index}" class="value">${task.value}</span>
    <div class="sideToSide">
        <div class="btn-group">
            <button type="button" class="btn text-white" onclick="addForm(${index})">Modifier</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"  onclick="selectStatus(${index}, this, 'todo')">To Do</a></li>
                <li><a class="dropdown-item" href="#" onclick="selectStatus(${index}, this, 'doing')">Doing</a></li>
                <li><a class="dropdown-item" href="#"  onclick="selectStatus(${index}, this, 'done')">Done</a></li>
            </ul>
                
        </div>
        <button class="delete" onclick="remove(${index})"><img src="/img/delete.png" alt="poubelle supprimer"></button>
    </div>
        
</div>`
    )
}

// Suppression de la tâche située à l'index donné.

function remove(index) {
    tasks[index] = null // Remplace l'élément à l'index par null (rien du tout) , permet d'éviter de déplacer tous les autres index.
    document.getElementById(`task[${index}]`).remove() // Supprime l'élément HTML qui contient la tâche

}


/**
 * Génération d'une tâche aléatoire
 */
function randomButton() {
    var randomWords = ["Promener Kiwi", "Laver Mamie", "Renverser papy", "Reveiller son cerveau", "Recharger son téléphone", "Demander des grossièretés en italien à Salwa", "Organiser un combat de Sumo", "Visiter Fleury-Mérogis", "Faire chier Benoît toutes les 5 minutes", "Manger du pudding", "Faire un barbecue à l'eau"]
    var task = { value: randomWords[Math.floor(Math.random() * randomWords.length)], status: "To Do" }
    /* On ajoute la tâche avec son index (tasks.length) */
    addTask(task, tasks.length)
    tasks.push(task)
}


/**
 * Modification d'une tâche grâce à un bouton
 */

//--- Cette fonction permet d'afficher le formulaire 
function addForm(index) {
    // on récupere l'element où on va rajouter notre formulaire
    var edited = document.getElementById(`edit-${index}`)
    console.log(edited)

    // Ajout du formulaire à l'element 
    edited.innerHTML = `
        <form id="edit-form" onsubmit="edit(${index}); return false;" >
            <input type="text" id="taskEdited" class="sendList" placeholder="Modifier la tâche">
            <button id="edit-btn" type="submit">Valider</button>
        </form>
    `

}

//--- Cette fonction est appellée dans le formulaire pour modifier l'Objet 
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


/**
 * Filtrer les status des tâches (to do, doing, done)
 */

function filterStatus(param1, param2, param3) {
    // console.log("hello")
    var arrayFiltered = tasks.filter(function (task) {
        if (param1 === toDo.value) {
            doing = doing.style.display = 'none';
        }
    })
    console.log(tasks)
    selectStatus(arrayFiltered)

    var toDo = document.getElementById("todo")
    var doing = document.getElementById("doing")
    var done = document.getElementById("done")


}