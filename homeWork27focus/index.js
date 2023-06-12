// Є текстове поле на сторінці
// Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

let textInput = document.querySelector('.textInput');
let container = document.querySelector('.container')
let div = document.createElement('div')
function focus() {
    container.append(div)
    div.textContent ='valid email contains @'
}

function blur() {
    div.textContent =''
}
textInput.addEventListener('blur', blur)
textInput.addEventListener('focus', focus)