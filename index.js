var buttons = document.getElementsByClassName("modif")
var del = document.getElementsByClassName("delete")
var boxes = document.getElementById("boxes")
var reinit

function modified(str) {

    paragraph.innerhtml = " "
}



function garbage() {



}

garbage()


// Explications de Benoit sur l'envoie de tâches dans le tableau

var list = document.getElementById("boxes")

var task = []

function onTaskSubmit(tasks) {
    var inputValue = document.getElementById("newTask").value
    tasks = { value: inputValue, status: "to do" }
    tasks.push(task)

    console.log(task)
    debbuger



    task.forEach(function (task) {
        list.innerHTML += list.innerHTML
    })
}
