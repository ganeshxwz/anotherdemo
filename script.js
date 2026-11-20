let countEl = document.getElementById("count")
let counterEl = document.getElementById("counter")

let count = 0

function add(){
    count += 1
    countEl.textContent = count
}

function minus(){
    count -= 1
    countEl.textContent = count
}

function save(){
    counterEl.textContent += count + " "
    count = 0 
    countEl.textContent = count
}