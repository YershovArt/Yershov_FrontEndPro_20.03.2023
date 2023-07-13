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
let cross = document.querySelector('.menu-message__cross');
let form = document.querySelector('.menu-message');
let about =  document.querySelector('.about');
let validateOrder = false;
let order = {};
let arr = [];
let myOrdersCategory = document.querySelector('.categories__my-orders');
let ordersCart = document.querySelector('.orders__info');

let a = document.getElementById('formName');
let submitButton = document.querySelector('.menu-message__button')
function addElement(itemInformation) {
    about =  document.querySelector('.about');
    about.innerHTML = itemInformation;
    about.appendChild(button);
    button.classList.remove('hide-butoon')
}

document.querySelector('.categories').addEventListener('click', (event) => {
  
   let searchClass = event.target.dataset['category'];
    all.forEach((element) => {
        if (!element.classList.contains(searchClass)) {
            element.classList.add('hide');
        } else  {
            element.classList.remove('hide');
            }
        }
    )
});

items.addEventListener('click', (event) =>{
    if (event.target.classList.contains('showcase__picture')) {
        let itemInformation = event.target.parentElement.parentElement.innerHTML;
        addElement(itemInformation);
    } else {
        return false;
    }
})

button.addEventListener('click', (event)=> {
    menu.classList.remove('hide'); 
    all.forEach((element) => {
        if (element.classList.contains('showcase__items-wrap') && !element.classList.contains('my-orders')) {
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

function infomationalWindow (orderDate, forObject, name, surname, phone, city, delivery, payment, quantity, bookName, price, totalPrice, comment="ok") {
    forObject = {}
    forObject["Name"] = name;
    forObject["Surname"] = surname;
    forObject["Phone"] = phone;
    forObject["City"] = city;
    forObject["Delivery warehouse"] = delivery;
    forObject["Payment"] = payment;
    forObject["Quantity"] = quantity;
    forObject["Book name"] = bookName;
    forObject["Price"] = price;
    forObject["TotalPrice"] = totalPrice;
    forObject["Comment"] = comment;
    saveToLocalStorage(orderDate, forObject);
    return forObject;
}

// TODO Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
// На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// Реалізувати можливість видалення замовлення зі списку.

function getDate() {
    let date = new Date();
    let getMonth = date.getMonth()+1;
    let processedDate = `${date.getDate()}.${getMonth.toString().padStart(2,'0')}.${date.getFullYear()}.${date.getTime()}`
    return processedDate;
}

function collectData() {
    let orderDate = getDate()
    let clientName = form.clientName.value;
    let forObject = form.clientName.value;
    let clientSurname = form.clientSurname.value;
    let clientPhone = form.phone.value;
    let selectalue = form.City.value;
    let delivery = form.delivery.value;
    let paiment = form.PaymentType.value;
    let quantity = form.Quantity.value;
    let bookName = document.querySelector('.about .showcase__name').textContent;
    let price = document.querySelector('.about .showcase__price').textContent;
    let totalPrice = +price * + quantity;
    let textArea = form.Comment.value;
    let clientOrder =  infomationalWindow(orderDate, forObject ,clientName, clientSurname, clientPhone,selectalue, delivery, paiment, quantity, bookName, price, totalPrice, textArea);
   
    menuContainer.innerHTML = '';
    Object.entries(clientOrder).map(([index, item])=> {
    menuContainer.innerHTML+=`
        <p class="menu-message__paragraph">${index}: ${item}</p> 
        `
    });
    menuContainer.insertAdjacentHTML("afterbegin", `<p class='menu-message__paragraph'>Than you for your Order ${clientOrder["Name"]}</p>`)
};

function saveToLocalStorage(key, data) {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
}

myOrdersCategory.addEventListener('click', function () {
    ordersCart.innerHTML =''; // document.querySelector('.orders__info');
    let ordersKeys = [];
    for (let i = 0; i<localStorage.length; i++) {
        console.log(JSON.parse(localStorage.key(i)));
        ordersKeys.push(localStorage.key(i))
    }
    console.log(ordersKeys)
    let innerUl = document.createElement('ul');
  
    ordersKeys.forEach(function (item, index) {
       console.log(JSON.parse(localStorage.getItem(item))
       );
       innerUl.innerHTML += `
            <li class="orders-list__item ${JSON.parse(item)}">
                <div>
                    Order date: ${JSON.parse(localStorage.key(item)).split('.').slice(0, 3).join('.')}
                </div>      
                <div>
                Order price: ${JSON.parse(localStorage.getItem(item))['TotalPrice'].toFixed(2)}
                </div>      
                <div>
                    <button type="submit" class="info__button" data-key="${JSON.parse(item)}">Order info</button>
                </div>
                <div>
                    <button type="submit" class="delete__button" data-key="${JSON.parse(item)}">Remove</button>
                </div>
            </li>
       `
    
    });

    ordersCart.appendChild(innerUl).classList.add('orders-list');

    document.querySelector('.orders-list').addEventListener('click', function(event) {
        function addCode() {
            let html = `
            <ul class="orders-list__item-additional ">
            <li class="${event.target.dataset['key']}">
                <div>
                    Name: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Name']}
                </div> 
                <div>
                    Surname: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Surname']}
                </div> 
                <div>
                    Phone: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Phone']}
                </div> 
                <div>
                    City: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['City']}
                </div> 
                <div>
                    Delivery warehouse: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Delivery warehouse']}
                </div> 
                <div>
                Book name: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Book name']}
                </div> 
                <div>
                Quantity: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Quantity']}
                </div> 
                <div>
                    Payment: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Payment']}
                </div> 
                <div>
                    Price: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Price']}
                </div> 
                <div>
                    Total price:  ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['TotalPrice'].toFixed(2)}
                </div> 
                <div>
                    Comment: ${JSON.parse(localStorage.getItem(JSON.stringify(event.target.dataset['key'])))['Comment']}
                </div> 
                <div>
                    <button type="submit" class="show-less__button" data-key="${event.target.dataset['key']}">Show Less</button>
                </div>
            </li>
        <ul>
       `
       return html;
    }
        let targetRow = event.target.dataset['key'];
        let liRow = document.querySelectorAll('li');
        let liButton = document.querySelectorAll('div button');
        console.log(liButton);
        console.log(liRow);
        liRow.forEach(function(item) {
            if (item.classList.contains(targetRow) && event.target.classList.contains('info__button')) {
                event.target.classList.add('hide');
                item.insertAdjacentHTML('afterend', addCode());
            } else if (item.classList.contains(targetRow) && event.target.classList.contains('delete__button')){
                localStorage.removeItem(JSON.stringify(event.target.dataset['key']));
                item.innerHTML = ``;
            } else if (item.classList.contains(targetRow) && event.target.classList.contains('show-less__button')){
                liButton.forEach(function (item) {
                    if (item.dataset.key === event.target.dataset.key) {
                        item.classList.remove('hide')
                    }
                })
                event.target.parentElement.parentElement.outerHTML = '';
            }
        });
    });     
});

