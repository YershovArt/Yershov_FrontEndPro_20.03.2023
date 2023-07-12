// TODO homework 34
// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

let all = document.querySelectorAll('.showcase__items-wrap');
let items = document.querySelector('.showcase__items');
let button = document.querySelector('.button');
let menu = document.querySelector('.menu-message');
let menuContainerInitial = document.querySelector('.menu-message__container').outerHTML;
let menuContainer = document.querySelector('.menu-message__container');
console.log(menuContainer.innerHTML);
let cross = document.querySelector('.menu-message__cross');
let form = document.querySelector('.menu-message');
let about =  document.querySelector('.about');
let validateOrder = false;
let order = {};
let arr = [];
let myOrdersCategory = document.querySelector('.categories__my-orders');
let ordersCart = document.querySelector('.orders__info');

let a = document.getElementById('formName');
console.log(a);
let submitButton = document.querySelector('.menu-message__button')
function addElement(a) {
    about =  document.querySelector('.about');
    about.innerHTML = a;
    about.appendChild(button);
    button.classList.remove('hide-butoon')
}

document.querySelector('.categories').addEventListener('click', (event) => {
  
   let searchClass = event.target.dataset['category'];
    all.forEach((element) => {
        if (!element.classList.contains(searchClass)) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');

            }
        }
    )
});

items.addEventListener('click', (event) =>{
    if (event.target.classList.contains('showcase__picture')) {
        let v = event.target.parentElement.parentElement.innerHTML;
        console.log(v);
        addElement(v);
    } else {
        return false;
    }
})

button.addEventListener('click', (event)=> {
    menu.classList.remove('hide'); 
    all.forEach((element) => {
        if (element.classList.contains('showcase__items-wrap')) {
            element.classList.remove('hide');
        }
    });   
});

cross.addEventListener('click', (event) => { // hide menu 
    menu.classList.add('hide');  
    about.innerHTML = ''; 
    menuContainer.innerHTML = menuContainerInitial; 
});

// TODO homework 40
// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        let error = formValidate(form);

      error === 0 ? collectData() : false
    }

    function formValidate(form) {
        let error = 0
        let formRequired = document.querySelectorAll('._required')
       
        for (let index = 0; index < formRequired.length; index++) {
            const input = formRequired[index];
            formRemoveError(input); // before check remove class error 
            if (input.classList.contains('_name')) {
                if(!nameTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else  if (input.classList.contains('_surname')) {
                if(!surnameTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.classList.contains('_phone')) {
                if(!phoneTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.classList.contains('_quantity')) {
                if(!quantityTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }   

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function nameTest(input) {
        return /^[a-z]{1,100}$/i.test(input.value);
    }

    function surnameTest(input) {
        return /^[a-z]{1,100}$/i.test(input.value);
    }

    function phoneTest(input) {
        return /^\+\d{12}$/.test(input.value)
    }

    function quantityTest(input) {
       let result = false;
       if (+input.value > 0 && +input.value <= 100) {
            result = true;
       }
       return result;
    }
});

function infomationalWindow (forObject, name, surname, city, delivery, payment, quantity, bookName, price, totalPrice, comment="ok") {
    forObject = {}
    forObject["Name"] = name;
    forObject["Surname"] = surname;
    forObject["City"] = city;
    forObject["Delivery warehouse"] = delivery;
    forObject["Payment"] = payment;
    forObject["Quantity"] = quantity;
    forObject["Book name"] = bookName;
    forObject["Price"] = price;
    forObject["TotalPrice"] = totalPrice;
    forObject["Comment"] = comment;
    toLocalStorage(bookName, forObject);
    return forObject;
}

function collectData() {
    let clientName = form.clientName.value;
    let forObject = form.clientName.value;
    let clientSurname = form.clientSurname.value;
    let selectalue = form.City.value;
    let delivery = form.delivery.value;
    let paiment = form.PaymentType.value;
    let quantity = form.Quantity.value;
    let bookName = document.querySelector('.about .showcase__name').textContent;
    let price = document.querySelector('.about .showcase__price').textContent;
    let totalPrice = +price * + quantity;
    let textArea = form.Comment.value;
    let clientOrder =  infomationalWindow(forObject ,clientName, clientSurname, selectalue, delivery, paiment, quantity, bookName, price, totalPrice, textArea);
    menuContainer.innerHTML = '';
    Object.entries(clientOrder).map(([index, item])=> {
    menuContainer.innerHTML+=`
        <p class="menu-message__paragraph">${index}: ${item}</p> 
        `
    });
    menuContainer.insertAdjacentHTML("afterbegin", `<p class='menu-message__paragraph'>Than you for your Order ${clientOrder["Name"]}</p>`)
    arr.push(clientOrder);
    console.log(clientOrder);
    console.log(arr);
};

function toLocalStorage(name, object) {

    localStorage.setItem(JSON.stringify(name), JSON.stringify(object));
}

myOrdersCategory.addEventListener('click', function () {
    ordersCart.innerHTML ='';
    let arr1 = [];
    for (let i = 1; i<localStorage.length; i++) {
        console.log(localStorage.key(i));
        arr1.push(localStorage.key(i))
    }
    console.log(arr1)
    let innerTable = document.createElement('table');
    let innerUl = document.createElement('ul');
    arr1.forEach(function (item) {
       console.log( JSON.parse(localStorage.getItem(item))
       );
        innerTable.innerHTML += `
          
            <tr>
                <td>
                    ${JSON.parse(localStorage.getItem(item))['Book name']}
                </td>       
                <td>
                    ${JSON.parse(localStorage.getItem(item))['Price']}
                </td>      
                <td>
                    ${JSON.parse(localStorage.getItem(item))['Quantity']}
                </td>  
                <td>
                    ${JSON.parse(localStorage.getItem(item))['TotalPrice'].toFixed(2)
        }
                </td>      
                   <td>
                    <button type="submit" class="delete">Remove</button>
        
                </td>
            </tr>
       `
    });

    ordersCart.appendChild(innerUl).appendChild(innerTable).insertAdjacentHTML('afterbegin',  `
<tr>
        <td>
            'Name of the book'
        </td>
        <td>
            'Price of the book'
        </td>
        <td>
            'Quantity'
        </td>
        <td>
            'Price'
        </td>
        <td>
        Removes
</td>
    </tr>`)

});