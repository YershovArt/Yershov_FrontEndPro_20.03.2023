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