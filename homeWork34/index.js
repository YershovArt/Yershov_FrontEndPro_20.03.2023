// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).


let all = document.querySelectorAll('.showcase__items-wrap');
let items = document.querySelector('.showcase__items');
let button = document.querySelector('.button')
let menu = document.querySelector('.menu-message')
let cross = document.querySelector('.menu-message__cross')

function addElement(a) {
    let about =  document.querySelector('.about');
    about.innerHTML = a;
    about.appendChild(button);
    button.classList.remove('hide-butoon')
}

document.querySelector('.categories').addEventListener('click', (event) => {
  
    searchClass = event.target.dataset['category'];
    all.forEach((element) => {
        if (!element.classList.contains(searchClass)) {
            element.classList.add('hide')
        } else {
            element.classList.remove('hide')
        }
    }
    )
});

items.addEventListener('click', (event) =>{
    if (event.target.classList.contains('showcase__picture')) {
        let v = event.target.outerHTML;
        addElement(v)
    } else {
        return false
    }
})

button.addEventListener('click', (event)=> {
    menu.classList.remove('hide');
    document.querySelector('.about').innerHTML='';
    all.forEach((element) => {
        if (element.classList.contains('showcase__items-wrap')) {
            element.classList.remove('hide')
        }
    }
    )
    
})

cross.addEventListener('click', (event) => {
    menu.classList.add('hide');
   
})


