// TODO Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
let arr = [1, 2, 3, 4, 5, 6, 7 ];

function returnArr(array, toRemove) {

    let newArr = [];

    for (let i = 0; i<array.length; i++) {
        if (array[i] !== toRemove) {
            newArr.push(array[i]);
        }
    }

    return newArr;

};

console.log(returnArr(arr, 6));
