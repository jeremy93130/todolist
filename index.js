var buttons = document.getElementsByClassName("modif")
var paragraph = document.getElementsByClassName("paragraph")
var del = document.getElementsByClassName("delete")
var reinit

function onTaskSubmit() {
    paragraph.innerhtml = " "
}

onTaskSubmit()

function modified(str) {
    
    paragraph.innerhtml =" "
}

modified()

function garbage() {
    document.getElementsByClassName("delete")
    

}

garbage()


// Explications de Benoit sur l'envoie de tâches dans le tableau

var list = document.getElementById("boxes")

var task = []

function onTaskSubmit (){
    var inputValue = document.getElementById("input").value 
    var task = {value: inputValue, status: "to do"}
    tasks.push(task)

    console.log(tasks)
    debbuger

    list.innerHTML = ""

    tasks.forEach(function(task) {
        list.innerHTML += list.innerHTML
    })
}
