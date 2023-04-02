// TODO Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
let arr = [1, 2, 3, 4, 5, 6, 7 ];

// First way
//function returnArr(array, toRemove) {
//    for (let i = 0; i<array.length; i++) {
//        if (array[i] === toRemove) {
//        delete array[i];
//        }
//    }
//    return array;
//};
//
//console.log(returnArr(arr, 6));

// Second way
//function returnArr(array, toRemove) {
//    let newArr = [];
//    for (let i = 0; i<array.length; i++) {
//        if (array[i] !== toRemove) {
//            newArr.push(array[i]);
//        }
//    }
//    return newArrx;
//};

//console.log(returnArr(arr, 6));

// Third way
//function returnArr(array, toRemove) {
//    for (let i = 0; i<array.length; i++) {
//        if (array[i] === toRemove) {
//            array.splice(i, 1);
//        }
//    }
//  return array;
//};
//
//console.log(returnArr(arr, 6));