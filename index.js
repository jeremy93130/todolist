var buttons = document.getElementsByClassName("modif")
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

function onTaskSubmit() {
    var inputValue = document.getElementById("newTask").value
    var task = { value: inputValue, status: "to do" }
    addTask(task, tasks.length)
    tasks.push(task)




    inputValue = ""
}
/**
 * Definit le nouveau status de la tâche sélectionnée
 * @param {number} index - L'index de la task 
 * @param {HTMLElement} element - L'élément HTML sur lequel j'ai cliqué (to do, doing , done)
 * @param {string} className - le nom de la class correspondante (voir)
 */
function selectStatus(index, element, className) {
    var task = tasks[index]
    task.status = element.innerText
    var span = document.getElementById(`status[${index}]`) // Va chercher dans le dom l'élément de l'id 
    span.innerHTML = task.status
    span.className = "status " + className //Changement de l'attribut class de l'élément span (changement couleur todo , doing , done) (voir ligne 43)
    selectStatus()

}

// Ligne 56 : Création d'une span de class 'status todo' 
// Ligne 47 : Donne un nom à la div conteneuse

/**
 * Ajout d'une nouvelle tâche
 * @param {Object} task - Tâche à ajouter
 * @param {int} index - L'index de la tâche dans le tableau [tasks]
 */
function addTask(task, index) {
    /*Ajout du code HTML de la tâche en fin de conteneur contrairement à .innerHTML qui remplace tout le code html*/
    boxes.insertAdjacentHTML("beforeend",

        ` <div id="task[${index}]" class="justify">
        <span class="status todo" id="status[${index}]">${task.status}</span> 
        <span class="value">${task.value}</span>
    <div>
        <div class="btn-group">
            <button type="button" class="btn text-white modif">Modifier</button>
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

// Fonction pour supprimer une tâche
function remove(index) {
    tasks[index] = null // Remplace l'élément à l'index par null (rien du tout) , permet d'éviter de déplacer tous les autres index.
    document.getElementById(`task[${index}]`).remove()

}


// Fonction bouton random : 

function randomButton() {
    var randomWords = ["Promener Kiwi", "Laver Mamie", "Renverser papy", "Reveiller son cerveau", "Recharger son téléphone", "Demander des grossièretées en italien à Salwa", "Organiser un combat de Sumo", "Visiter Fleury-Mérogis", "Faire chier Benoît toutes les 5 minutes", "Manger du pudding", "Faire un barbecu à l'eau"]
    var maths = Math.floor(Math.random() * (randomWords.length)); 

    var task = { value: randomWords[maths], status: "To Do" }

    addTask(task, tasks.length)
    tasks.push(task)
}
