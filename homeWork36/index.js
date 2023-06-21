//TODO Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3])
// і генерує список з елементів:

let arr = [1, 2, 3, [2,3,[11,11,[22]]]];

function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(arrEl => {
        let li = document.createElement('li');
        Array.isArray(arrEl) ? li.appendChild(generateList(arrEl)) : li.innerHTML = `<li>${arrEl}</li>`;
        ul.appendChild(li)
    });
    return ul;
}

document.querySelector('body').appendChild(generateList(arr));