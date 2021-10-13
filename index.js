var buttons = document.getElementsByClassName("modif")
var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit = document.getElementById("writing")
// var deleteTask = document.getElementsByClassName("delete")


// Explications de Benoit sur l'envoie de tâches dans le tableau

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
 * @param {integer} index - L'index de la task 
 * @param {DOMElement} element - L'élément HTML sur lequel j'ai cliqué (to do, doing , done)
 * @param {string} className - le nom de la class correspondante (voir)
 */
function selectStatus(index, element, className) {
    console.log("index= ", index)
    console.dir(element.innerText)
    var task = tasks[index]
    task.status = element.innerText
    console.dir(task)
    var span = document.getElementById(`status[${index}]`) // Va chercher dans le dom l'élément de l'id 
    console.dir(span)
    span.innerHTML = task.status
    span.className = "status " + className //Changement de l'attribut class de l'élément span (changement couleur todo , doing , done) (voir ligne 43)
    

}

// Ligne 48 : Création d'une span de class 'status todo' 
function addTask(task, index) {
    boxes.insertAdjacentHTML("beforeend",

        ` <div class="justify">
        <span class="status todo" id="status[${index}]">${task.status}</span> 
        <span class="value">${task.value}</span>
    <div>
        <div class="btn-group">
            <button type="button" onclick="modified(${index})" class="btn text-white modif">Modifier</button>
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
    tasks.splice(index, 1)
    
}

// Fonction pour modifier une tâche

function modified() {
    var edit = document.getElementById("boxes")

    var edited = edit.split().join("")
    console.log(edited)

    var task = { value: edit[boxes], status: "doing" }


}


// Fonction bouton random : 

function randomButton() {
    var randomWords = ["Promener Kiwi", "Laver Mamie", "Renverser papy", "Reveiller son cerveau", "Recharger son téléphone", "Demander des grossièretées en italien à Salwa", "Organiser un combat de Sumo", "Visiter Fleury-Mérogis", "Faire chier Benoît toutes les 5 minutes", "Manger du pudding", "Faire un barbecu à l'eau"]
    var maths = Math.floor(Math.random() * (randomWords.length));

    var task = { value: randomWords[maths], status: "To Do" }

    addTask(task, tasks.length)
    tasks.push(task)
    console.log(task)
}
